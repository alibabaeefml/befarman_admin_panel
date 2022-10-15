import { defineStore } from "pinia";
import { ref, computed } from "vue";
import clientCar from "@/types/clientCar";
import Paginate, { defaultPaginate } from "@/types/paginate";

export const useClientCarStore = defineStore("clientCar", () => {
  const clientCars = ref<clientCar[]>([]);
  const getClientCars = computed(() => clientCars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return { clientCars, getClientCars, paginate };
});
