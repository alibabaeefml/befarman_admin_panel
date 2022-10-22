import axios from "axios";
import url from "../url";
// import {getJsonUser } from "../resources/userResource";
import { setQueries } from "@/utils/createQueriesObject";
export default class UserRepository {
  async index(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexUser"), { params });
    return response.data
    
  }

  async show(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("showUser", { params }));

    return response.data;
  }

}
