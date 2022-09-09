function isJsonString (str) {
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
        localStorage.setItem(key, value)
    },
    get: (key) => {
        let value = localStorage.getItem(key);
        if (value) {
            if (isJsonString(value)) {
                return JSON.parse(value);
            } else {
                return value;
            }
        }
        return null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
}