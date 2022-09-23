import axios from 'axios'
import url from '../url';
import { getArray, getJson } from '../resources/carResource';
import { setQueries } from '@/utils/createQueriesObject';
export default class CarRepository {
    async index(data = {}) {
        const params = setQueries(data)
        const response = await axios.get(url('indexCar'), { params });
        return getArray(response.data);
    }

    async store(carData) {
        const response = await axios.post(url('storeCar'), carData);
        return getJson(response.data.data);
    }

    async update(carId, carData) {
        const response = await axios.put(url('updateCar', { car: carId }), carData);
        return getJson(response.data.data);
    }

    async delete(carId) {
        const response = await axios.delete(url('deleteCar', { car: carId }));
        return true;
    }
}