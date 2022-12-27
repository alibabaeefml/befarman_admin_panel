import axios from "axios";
import url from "../url";
import type { dynamicObject } from "@/types/common";
import { getJsonUser, getArrayUsers, setData } from "../resources/userResource";
import { setQueries } from "@/utils/createQueriesObject";
export default class UserRepository {
  async index(data: dynamicObject) {    
    const params = setQueries(data);
    const response = await axios.get(url("indexUser"), { params });
    return getArrayUsers(response.data);
  }

  // not working
  async indexArchived(data: dynamicObject) {
    const params = setQueries(data);
    const response = await axios.get(url("indexArchivedUser"), { params });
    return getArrayUsers(response.data);
  }

  async show(data: dynamicObject) {
    const response = await axios.get(url("showUser", { user: data.id }));
    return getJsonUser(response.data.data);
  }

  async store(userData: dynamicObject) {
    const formData = setData(userData);
    const response = await axios.post(url("storeUser"), formData);
    return getJsonUser(response.data.data);
  }

  async update(userId: number, userData: dynamicObject) {
    const formData = setData(userData);
    const response = await axios.put(
      url("updateUser", { user: userId }),
      formData
    );
    return getJsonUser(response.data.data);
  }
  async sms(form: dynamicObject) {
    const response = await axios.post(url("sms", { user: form.id }), {
      message: form.message,
    });
    return response;
  }
  async delete(userId: number) {
    const response = await axios.delete(url("archiveUser", { user: userId }));
    return response.data.data;
  }

  async restore(userId: number) {
    const response = await axios.post(url("restoreUser", { user: userId }));
    return response.data.data;
  }

  async verify(userId: number) {
    axios.post(url("verifyUser", { user: userId }));
  }

  async unverify(userId: number) {
    axios.post(url("unverifyUser", { user: userId }));
  }
}
