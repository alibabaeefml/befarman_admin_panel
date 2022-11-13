import axios from "axios";
import url from "../url";
import { getArray, getJson, setData } from "../resources/clientCarResource";
import { setQueries } from "@/utils/createQueriesObject";
export default class ClientCarRepository {
  async index(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexClientCar"), { params });
    return getArray(response.data);
  }
  async indexArchived(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexArchivedClientCar"), { params });
    return getArray(response.data);
  }
  async show(clientCar) {
    const response = await axios.get(url("showClientCar", { clientCar }));
    return getJson(response.data.data);
  }
  async store(clientCarData) {
    const formData = setData(clientCarData);
    const response = await axios.post(url("storeClientCar"), formData);
    return getJson(response.data.data);
  }

  async update(carId, clientCarData) {
    const formData = setData(clientCarData);
    const response = await axios.put(
      url("updateClientCar", { car: carId }),
      formData
    );
    return getJson(response.data.data);
  }

  async delete(carId) {
    await axios.delete(url("archiveClientCar", { car: carId }));
  }

  async restore(carId) {
    const response = await axios.post(url("restoreClientCar", { car: carId }));
    return response.data.data;
  }
  async total() {
    const response = await axios.get(url("indexClientCar"), {});

    return response.data.meta.total;
  }
}
