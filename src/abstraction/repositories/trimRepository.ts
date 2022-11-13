import axios from "axios";
import { getArray } from "../resources/trimResource";
import url from "../url";

export default class TrimRepository {
  async index() {
    const response = await axios.get(url("indexTrim"));
    return getArray(response.data);
  }
  async indexAll() {
    const response = await axios.get(url("indexAllTrim"));
    return getArray(response.data.data);
  }
  async indexWithCar(car: string | number) {
    const response = await axios.get(url("indexTrimWithCar", { car }));
    return getArray(response.data);
  }
}
