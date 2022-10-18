import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCar } from "@/types/clientCar";
import { defaultPaginate, type Paginate } from "@/types/paginate";

export const useCarStore = defineStore("car", () => {
  const cars = ref<ClientCar[]>([]);
  const getCars = computed(() => cars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return { cars, getCars, paginate };
});
