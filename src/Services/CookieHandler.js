import {set as setCookie, get as getCookie} from 'es-cookie';

const cookieName = "DRS";
export default {
    save: (data) => {
        setCookie(cookieName, JSON.stringify(data));
    },
    retrieve: () => {
        const cookieValue = getCookie(cookieName);
        if (!cookieValue)
            return {};
        return JSON.parse(cookieValue)
    },
    update: (data) => {
        const cookieValue = getCookie(cookieName);
        if (!cookieValue) {
            return;
        }
        let currentCookie = JSON.parse(getCookie(cookieName));
        setCookie(cookieName, JSON.stringify({...currentCookie, ...data}));
    }
}