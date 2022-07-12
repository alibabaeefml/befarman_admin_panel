import qs from 'qs';

const TOKEN_KEY = 'access_token'
const USER = 'user'
const CATEGORYNAME = 'category_name'
const PERMISSION = 'permission'
const VIRTUALACTIVITY = 'virtual_activity'
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken = null) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },
}
const CategoryNameService = {
    get() {
        if (localStorage.getItem(CATEGORYNAME)) {
            return qs.parse(localStorage.getItem(CATEGORYNAME))
        }
        return null;
    },

    save(category_name = null) {
        category_name = qs.stringify(category_name);        
        localStorage.setItem(CATEGORYNAME, category_name)
    },

    remove() {
        localStorage.removeItem(CATEGORYNAME)
    },
}

const UserService = {
    get() {
        if (localStorage.getItem(USER)) {
            return qs.parse(localStorage.getItem(USER))
        }
        return null;
    },

    save(user = null) {
        user = qs.stringify(user);        
        localStorage.setItem(USER, user)
    },

    remove() {
        localStorage.removeItem(USER)
    },
}

const PermissionService = {
    get() {
        if (localStorage.getItem(PERMISSION)) {
            return qs.parse(localStorage.getItem(PERMISSION))
        }
        return null;
    },

    save(permission = null) {
        permission = qs.stringify(permission);        
        localStorage.setItem(PERMISSION, permission)
    },

    remove() {
        localStorage.removeItem(PERMISSION)
    },
}
const VirtualActivityService = {
    get() {
        if (localStorage.getItem(VIRTUALACTIVITY)) {
            return qs.parse(localStorage.getItem(VIRTUALACTIVITY))
        }
        return null;
    },

    save(virtualActivity = null) {
        virtualActivity = qs.stringify(virtualActivity);
        localStorage.setItem(VIRTUALACTIVITY, virtualActivity)
    },

    remove() {
        localStorage.removeItem(PERMISSION)
    },
}

export { TokenService, UserService, PermissionService, VirtualActivityService, CategoryNameService }
