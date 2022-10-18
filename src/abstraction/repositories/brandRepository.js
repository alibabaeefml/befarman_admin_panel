import axios from "axios";
import { getArray } from "../resources/brandResource";
import url from "../url";

export default class BrandRepository {
  async index() {
    const response = await axios.get(url("indexBrand"));
    return getArray(response.data);
  }
}
