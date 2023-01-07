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

  const indexCar = async (paginate: dynamicObject) => {
    const { data, pagination } = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.cars = getCars.value.concat(data);
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
    alert(response.status);
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
