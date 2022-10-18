import axios from "axios";
import url from "../url";
import { getJson, setData } from "../resources/fileResource";

export default class FileRepository {
  async store(data) {
    const formData = setData(data);
    let response = await axios.post(url("storeFiles"), formData, {
      errorHandler: false,
    });
    if (response.status === 200) {
      return getJson(response.data.data);
    }
  }
}
