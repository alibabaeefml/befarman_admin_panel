import { storeToRefs } from "pinia";
import { useClientCarStore } from "@/store/clientCar";
import ClientCarRepository from "@/abstraction/repositories/clientCarRepository";

export function useClientCar() {
  const store = useClientCarStore();
  const repository = new ClientCarRepository();

  const { getClientCars, paginate } = storeToRefs(store);

  const updateCar = async (carId, carData) => {
    const car = await repository.update(carId, carData);

    const index = store.clientCars.findIndex((car) => car.id === carId);
    store.clientCars[index] = car;
    return car;
  };

  const storeCar = async (carData) => {
    const car = await repository.store(carData);
    store.clientCars.push(car);
    return car;
  };

  const indexCar = async (paginate) => {
    const { data, pagination } = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.clientCars = getClientCars.value.concat(data);
    });

    return data;
  };

  const showCar = async (data) => {
    return (await repository.show(data)).data;
  };

  const deleteCar = async (carId) => {
    let response = await repository.delete(carId);
    alert(response.status);
  };

  return {
    updateCar,
    storeCar,
    indexCar,
    showCar,
    getClientCars,
    paginate,
    deleteCar,
  };
}
