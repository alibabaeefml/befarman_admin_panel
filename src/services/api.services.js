import axios from 'axios'
import { TokenService } from './storage.services'
const ApiService = {

    init(baseURL = null) {
        if (baseURL) {
            axios.defaults.baseURL = baseURL;
        } else if (process.env.MIX_PUSHER_APP_API) {
            axios.defaults.baseURL = process.env.MIX_PUSHER_APP_API;
        }
        this.setHeader();
    },

    setHeader() {
        axios.defaults.headers.common["Accept-Language"] = `fa`;
    },

    setAuthHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
    },

    removeAuthHeader() {
        axios.defaults.headers.common["Authorization"] = null;
    },

}

export default ApiService
export { ApiService }