import { storeToRefs } from 'pinia'
import { useCarStore } from '@/store/car';
import CarRepository from '@/abstraction/repositories/carRepository';

export function useCar() {

    let loadingData = false
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

    const indexCar = async (paginate) => {
        const { data, pagination } = await repository.index(paginate)
        console.log(data)
        console.log(getCars.value)
        store.$patch((state) => {
            state.paginate = pagination
            state.cars = getCars.value.concat(data)
        })

        return data;
    }

    const infiniteCar = async ($state) => {
        if (loadingData || paginate.page >= paginate.pageCount) {
            return false;
        }
        const data = {pagination: {}}
        data['pagination'] = {...paginate.value}
        data.pagination.page++
        loadingData = true
        try {
            await indexCar(data)
            if (paginate.page < paginate.pageCount) {
                $state.loaded();
            } else {
                $state.complete();
            }
        } catch (e) {

        } finally {
            loadingData = false
        }

    }

    return { updateCar, storeCar, indexCar, getCars, paginate, infiniteCar }
}