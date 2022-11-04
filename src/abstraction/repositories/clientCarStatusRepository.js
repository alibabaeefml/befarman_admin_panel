import axios from "axios";
import { getArrayClientCarStatus } from "../resources/clientCarStatusResource";
import url from "../url";

export default class ClientCarStatusRepository {
  async index() {
    const response = await axios.get(url("indexStatus"));
    return getArrayClientCarStatus(response.data);
  }
  async change(carId, status_id) {
    const response = await axios.put(
      url("changeStatus", { car: carId }),{status_id:status_id}
    );
    console.log(response);
    return
  }
}
