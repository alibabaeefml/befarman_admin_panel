import axios from "axios";
import StoreManagement from "@/utils/store-management";
const ApiService = {
  init(baseURL: string | null = null) {
    if (baseURL) {
      axios.defaults.baseURL = baseURL;
    } else if (process.env.MIX_PUSHER_APP_API) {
      axios.defaults.baseURL = process.env.MIX_PUSHER_APP_API;
    }
    this.setHeader();
    this.setAuthHeader();
  },

  setHeader() {
    axios.defaults.headers.common["Accept-Language"] = `fa`;
  },

  setAuthHeader(token: string | null = null) {
    if (!token) {
      token = StoreManagement.get("token", "cookie");
    }
    token === null ? localStorage.clear() : null;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  removeAuthHeader() {
    axios.defaults.headers.common["Authorization"] = null;
  },
};

export default ApiService;
export { ApiService };
