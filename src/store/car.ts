import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Car } from "@/types/car";
import { defaultPaginate, type Paginate } from "@/types/paginate";

export const useCarStore = defineStore("car", () => {
  const defaultCarFilters = {
    name: {
      type: 'like',
      val: null
    },
    user_name: {
      type: 'like',
      val: null
    }
  };

  const cars = ref<Car[]>([]);
  const filteredCars = ref<Car[]>([]);
  const getCars = computed(() => cars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return { cars, getCars, paginate, filteredCars };
});
