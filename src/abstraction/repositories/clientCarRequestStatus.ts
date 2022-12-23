import axios from "axios";
// import { getArrayClientCarStatus } from "../resources/clientCarStatusResource";
import url from "../url";

export default class ClientCarStatusRepository {
  async index() {
    const response = await axios.get(url("indexClientCarStatus"));
    return getArrayClientCarStatus(response.data);
  }
  async change(carId: number, status_id: number) {
    const response = await axios.put(url("changeClientCarStatus", { car: carId }), {
      status_id: status_id,
    });
    console.log(response);
    return;
  }
}
