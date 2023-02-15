import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Car } from "@/types/car";
import { defaultPaginate, type Paginate } from "@/types/paginate";
import { cloneDeep } from "lodash";

export const useCarStore = defineStore("car", () => {
  const defaultCarFilters = {
    brand_id: {
      type: "like",
      val: null,
    },
    name_fa: {
      type: "like",
      val: null,
    },
    capacity: {
      type: "like",
      val: null,
    },
    body_type_id: {
      type: "like",
      val: null,
    },
  };

  const carFilters:any = ref<{}>(cloneDeep(defaultCarFilters));
  const resetFilter = () => {
    carFilters.value = cloneDeep(defaultCarFilters);
  };
  const cars = ref<Car[]>([]);

  const getCars = computed(() => cars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return { cars, getCars, paginate, carFilters, resetFilter };
});
