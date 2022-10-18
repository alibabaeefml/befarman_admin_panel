import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCar } from "@/types/clientCar";
import { defaultPaginate, type Paginate } from "@/types/paginate";

export const useClientCarStore = defineStore("clientCar", () => {
  const clientCars = ref<ClientCar[]>([]);
  const getClientCars = computed(() => clientCars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return { clientCars, getClientCars, paginate };
});
