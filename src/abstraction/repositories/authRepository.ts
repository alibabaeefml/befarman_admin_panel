import axios from "axios";
import url from "../url";
import { getJson } from "../resources/authResource";
import type { dynamicObject } from "@/types/common";

export default class AuthRepository {
  async sendCode(phone: string) {
    await axios.post(url("sendCode"), { phone });
    return true;
  }

  async login({ phone, code }: dynamicObject) {
    const response = await axios.post(url("login"), {
      phone,
      code,
    });
    if ([200, 201].includes(response.status)) {
      return getJson(response.data);
    }
    return null;
  }

  async logout() {
    await axios.post(url("logout"));
    return true;
  }
}
