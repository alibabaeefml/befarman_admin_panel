import axios from 'axios'
import { TokenService } from './storage.services'
// import commonState from '@Global/store/modules/common/state';
const ApiService = {

    init(baseURL = null) {
        if (baseURL) {
            axios.defaults.baseURL = baseURL;
        } else if (process.env.MIX_PUSHER_APP_API) {
            axios.defaults.baseURL = process.env.MIX_PUSHER_APP_API;
        }
        this.setHeader();
        axios.interceptors.request.use((config) => {
            config.headers = this.setModuleHeader(config.headers);
            return config;
        });
    },

    setHeader() {
        axios.defaults.headers.common["Accept-Language"] = `fa`;
    },

    setModuleHeader(headers = axios.defaults.headers.common) {
        headers['Module'] = commonState.current_module;
        return headers;
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
