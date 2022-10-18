import axios from "axios";
import { getArray } from "../resources/bodyTypeResource";
import url from "../url";

export default class BodyTypeRepository {
  async index() {
    const response = await axios.get(url("indexBodyType"));
    return getArray(response.data.data);
  }
}
