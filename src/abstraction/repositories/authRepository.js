import axios from "axios";
import url from "../url";

export default class BrandRepository {
  async sendCode(phone) {
    await axios.post(url("sendCode"), { phone });
    return true;
  }

  async login({ phone, code }) {
    try {
      const { data: response } = await axios.post(url("login"), {
        phone,
        code,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await axios.post(url("logout"));
    return true;
  }
}
