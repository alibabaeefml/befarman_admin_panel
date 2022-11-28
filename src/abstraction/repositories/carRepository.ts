import axios from "axios";
import url from "../url";
import { getArray, getJson, setData } from "../resources/carResource";
import { setQueries } from "@/utils/createQueriesObject";
import type { dynamicObject } from "@/types/common";
export default class CarRepository {
  async index(data = {}) {
    const params = setQueries(data);
    const response = await axios.get(url("indexCar"), { params });
    return getArray(response.data);
  }

  async store(carData: dynamicObject) {
    const formData = setData(carData);
    const response = await axios.post(url("storeCar"), formData);
    console.log(response);
    return getJson(response.data.data);
  }

  async update(carId: number, carData: dynamicObject) {
    const formData = setData(carData);
    const response = await axios.put(
      url("updateCar", { car: carId }),
      formData
    );
    return getJson(response.data.data);
  }

  async delete(carId: number) {
    return await axios.delete(url("destroyCar", { car: carId }));
  }
}
