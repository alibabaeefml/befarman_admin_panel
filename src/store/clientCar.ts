import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCar } from "@/types/clientCar";
import { defaultPaginate, type Paginate } from "@/types/paginate";

export const useClientCarStore = defineStore("clientCar", () => {
  const clientCars = ref<ClientCar[]>([]);
  const archivedClientCars = ref<ClientCar[]>([]);
  const getClientCars = computed(() => clientCars.value);
  const getArchivedClientCars = computed(() => archivedClientCars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  return {
    clientCars,
    archivedClientCars,
    getArchivedClientCars,
    getClientCars,
    paginate,
  };
});
