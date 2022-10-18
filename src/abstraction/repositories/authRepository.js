import axios from "axios";
import url from "../url";
import { getJson } from "../resources/authResource";

export default class AuthRepository {
  async sendCode(phone) {
    await axios.post(url("sendCode"), { phone });
    return true;
  }

  async login({ phone, code }) {
    try {
      const response = await axios.post(url("login"), {
        phone,
        code,
      });
      return getJson(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await axios.post(url("logout"));
    return true;
  }
}
