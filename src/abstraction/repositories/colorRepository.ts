import axios from "axios";
import { getArray } from "../resources/colorResource";
import url from "../url";

export default class ColorRepository {
  async index() {
    const response = await axios.get(url("indexColor"));
    return getArray(response.data.data);
  }
}
