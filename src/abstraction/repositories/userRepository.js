import axios from "axios";
import url from "../url";
import { getJsonUser, getArrayUsers } from "../resources/userResource";
import { setQueries } from "@/utils/createQueriesObject";
export default class UserRepository {
  async index(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexUser"), { params });
    return getArrayUsers(response.data);
  }

  // not working
  async indexArchived(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexArchivedUser"), { params });
    return getArrayUsers(response.data);
  }

  async show(data = {}) {
    const response = await axios.get(url("showUser", { user: data.id }));
    return getJsonUser(response.data.data);
  }

  async store(userData) {
    const formData = setData(userData);
    const response = await axios.post(url("storeUser"), formData);
    return getJson(response.data.data);
  }

  async update(userId, userData) {
    const formData = setData(userData);
    const response = await axios.put(
      url("updateUser", { user: userId }),
      formData
    );
    return getJson(response.data.data);
  }
  async sms(form) {
    const response = await axios.post(url("sms", { user: form.id }), {
      message: form.message,
    });
    return response;
  }
  async delete(userId) {
    const response = await axios.delete(url("archiveUser", { user: userId }));
    return response.data.data;
  }

  async restore(userId) {
    const response = await axios.post(url("restoreUser", { user: userId }));
    return response.data.data;
  }

  async verify(userId) {
    const response = axios.post(url("verifyUser", { user: userId }));
    return response.data.data;
  }

  async unverify(userId) {
    const response = axios.post(url("unverifyUser", { user: userId }));
  }
}

// console.log(response);
