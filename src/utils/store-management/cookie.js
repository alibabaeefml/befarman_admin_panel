let hosts = location.hostname.split('.');
let BASE_URL_WITHOUT_PROTOCOL = "localhost";
if (hosts[0] !== "localhost") {
    BASE_URL_WITHOUT_PROTOCOL = "." + hosts.slice(Math.max(hosts.length - 2, 0)).join('.');
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
export default {
    set: (key, value) => {
        value = (typeof value == 'object') ? JSON.stringify(value) : value;
        document.cookie = `${key}=${value};path=/;domain=${BASE_URL_WITHOUT_PROTOCOL}`;
    },
    get: (key) => {
        let name = key + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                let value = c.substring(name.length, c.length);
                if (isJsonString(value)) {
                    return JSON.parse(value);
                } else {
                    return value;
                }
            }
        }
        return null;
    },
    remove: (key) => {
        document.cookie = key + `=;path=/;domain=${BASE_URL_WITHOUT_PROTOCOL};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    },
}