import axios from "axios";
import url from "../url";
import { getJson, setData, type FileResponse, type FileSetData } from "../resources/fileResource";

export default class FileRepository {
  async store(data: FileSetData): Promise<FileResponse | null> {
    const formData = setData(data);
    let response = await axios.post(url("storeFiles"), formData, {errorHandler: false});
    if ([200, 201].includes(response.status)) {
      return getJson(response.data.data);
    }
    return null;
  }
}
