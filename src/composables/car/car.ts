import { storeToRefs } from "pinia";
import { useCarStore } from "@/store/car";
import CarRepository from "@/abstraction/repositories/carRepository";
import defaultThumb from "@/assets/Images/avatars/car-avatar.jpg";
import type { dynamicObject } from "@/types/common";
export function useCar() {
  const store = useCarStore();
  const repository = new CarRepository();

  const { getCars, paginate } = storeToRefs(store);

  const updateCar = async (carId: number, carData: dynamicObject) => {
    const car = await repository.update(carId, carData);
    const index = store.cars.findIndex((car) => car.id === carId);
    store.cars[index] = car;
    return car;
  };

  const storeCar = async (carData: dynamicObject) => {
    const car = await repository.store(carData);
    store.cars.push(car);
    return car;
  };

  const indexCar = async (dataQuery: {}) => {
    const filters = store.carFilters;

    dataQuery = { ...dataQuery, ...{ filters } };

    const { data, pagination } = await repository.index(dataQuery);

    store.$patch((state) => {
      state.paginate = pagination;
      state.cars = pagination.page == 1 ? data : getCars.value.concat(data);
    });
    return data;
  };

  const searchCar = async (params: dynamicObject) => {
    const { data } = await repository.index(params);
    store.cars = data;
    return data;
  };

  const deleteCar = async (carId: number) => {
    const response = await repository.delete(carId);
    const index = store.cars.findIndex((car) => car.id === carId);
    store.cars.splice(index, 1)
  };

  return {
    updateCar,
    storeCar,
    indexCar,
    getCars,
    paginate,
    deleteCar,
    defaultThumb,
    searchCar,
  };
}
