import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Car from '@/types/car'
import Paginate, { defaultPaginate } from '@/types/paginate'

export const useCarStore = defineStore('car', () => {
    const cars = ref < Car[] > ([])
    const getCars = computed(() => cars.value)

    const paginate = ref < Paginate > (defaultPaginate)

    return { cars, getCars, paginate }
})