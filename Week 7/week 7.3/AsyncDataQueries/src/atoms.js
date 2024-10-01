import {atom, selector} from 'recoil';
import axios from 'axios';

// Asynchronous data queries
export const notifications = atom({
    key:"notifications",
    default: selector({
        key: "notificationsSelector",
        get: async() => {
            // to add a temporary delay uncomment the below line
            // await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get("http://localhost:3000/notifications");
            return res.data;
        }
    })
});


export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=> {
        const allNotifications = get(notifications);
        return allNotifications.network +
        allNotifications.jobs + allNotifications.notifications+
        allNotifications.messaging;
    }
});