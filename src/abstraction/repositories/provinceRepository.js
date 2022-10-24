import axios from "axios";
import { getArray } from "../resources/provinceResource";
import url from "../url";
import { setQueries } from "@/utils/createQueriesObject";
export default class ProvinceRepository {
  async index() {
    const response = await axios.get(url("indexProvince"));
    return getArray(response.data.data);
  }
  async show(id) {
    const response = await axios.get(url("showCity", { id: id }));
    return response.data.data;
  }
}
