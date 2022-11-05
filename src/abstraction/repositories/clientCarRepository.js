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

  async show(data = {}) {
    const response = await axios.get(url("showClientCar", { car: data.id }));
    return response.data.data;
  }
  async store(carData) {
    const formData = setData(carData);
    const response = await axios.post(url("storeClientCar"), formData);
    return getJson(response.data.data);
  }

  async update(carId, carData) {
    const formData = setData(carData);
    const response = await axios.put(
      url("updateClientCar", { car: carId }),
      formData
    );
    return getJson(response.data.data);
  }

  async delete(carId) {
    const response = await axios.delete(url("destroyClientCar",{car: carId}));
    return response.data.data;
  }

  async restore(carId) {
    const response = await axios.post(url("restoreClientCar", { car: carId }));
    return response.data.data;
  }
}
