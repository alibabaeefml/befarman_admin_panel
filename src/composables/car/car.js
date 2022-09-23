import { storeToRefs } from 'pinia'
import { useCarStore } from '@/store/car';
import CarRepository from '@/abstraction/repositories/carRepository';

export function useCar() {

    const store = useCarStore()
    const repository = new CarRepository();

    const { getCars, paginate } = storeToRefs(store)

    const updateCar = (carId, carData) => {
        const car = repository.update(carId, carData);
        const index = store.cars.findIndex(car => car.id === carId);
        store.cars[index] = car;
        return car;
    }

    const storeCar = (carData) => {
        const car = repository.store(carData);
        store.cars.push(car);
        return car;
    }

    const indexCar = (paginate) => {
        const { data, pagination } = repository.index(paginate);
        store.$patch((state) => {
            state.paginate = pagination
            state.cars = data
        })
        return store.cars;
    }

    return { updateCar, storeCar, indexCar, getCars, paginate }
}