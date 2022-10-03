import { storeToRefs } from 'pinia'
import { useCarStore } from '@/store/car';
import CarRepository from '@/abstraction/repositories/carRepository';

export function useCar() {

    const store = useCarStore()
    const repository = new CarRepository();

    const { getCars, paginate } = storeToRefs(store)

    const updateCar = async (carId, carData) => {
        const car = await repository.update(carId, carData);
        const index = store.cars.findIndex(car => car.id === carId);
        store.cars[index] = car;
        return car;
    }

    const storeCar = async (carData) => {
        const car = await repository.store(carData);
        store.cars.push(car);
        return car;
    }

    const indexCar = async (paginate) => {
        const { data, pagination } = await repository.index(paginate)
        store.$patch((state) => {
            state.paginate = pagination
            state.cars = getCars.value.concat(data)
        })

        return data;
    }

    return { updateCar, storeCar, indexCar, getCars, paginate }
}