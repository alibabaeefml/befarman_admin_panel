import { storeToRefs } from "pinia";
import { useClientCarStore } from "@/store/clientCar";
import ClientCarRepository from "@/abstraction/repositories/clientCarRepository";

export function useClientCar() {
  const store = useClientCarStore();
  const repository = new ClientCarRepository();

  const { getClientCars, paginate } = storeToRefs(store);

  const updateClientCar = async (clientCarId, clientCarData) => {
    const clientCar = await repository.update(clientCarId, clientCarData);

    const index = store.clientCars.findIndex((clientCar) => clientCar.id === clientCarId);
    store.clientCars[index] = clientCar;
    
    return clientCar;
  };

  const storeClientCar = async (clientCarData) => {
    const clientCar = await repository.store(clientCarData);
    store.clientCars.push(clientCar);
    return clientCar;
  };

  const indexClientCar = async (paginate) => {
    const { data, pagination } = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.clientCars = getClientCars.value.concat(data);
    });

    return data;
  };

  const showClientCar = async (data) => {
    return await repository.show(data);
  };

  const deleteClientCar = async (clientCarId) => {
    let response = await repository.delete(clientCarId);
    alert(response.status);
  };

  return {
    updateClientCar,
    storeClientCar,
    indexClientCar,
    showClientCar,
    getClientCars,
    paginate,
    deleteClientCar,
  };
}
