import axios from "axios";
import { getArrayClientCarStatus } from "../resources/clientCarStatusResource";
import url from "../url";

export default class ClientCarStatusRepository {
  async index() {
    const response = await axios.get(url("indexStatus"));
    return getArrayClientCarStatus(response.data);
  }
}
