import Cookie from './cookie'
import LocalStorage from './localStorage'
export default {
    set: (key, value, typeOfStorage = 'localStorage') => {
        if (typeOfStorage === 'cookie') {
            Cookie.set(key, value);
        } else {
            LocalStorage.set(key, value);
        }
    },
    get: (key, typeOfStorage = 'localStorage') => {
        if (typeOfStorage === 'cookie') {
            return Cookie.get(key);
        } else {
            return LocalStorage.get(key);
        }
    },
    remove: (key, typeOfStorage = 'localStorage') => {
        if (typeOfStorage === 'cookie') {
            Cookie.remove(key);
        } else {
            LocalStorage.remove(key);
        }
    },
}