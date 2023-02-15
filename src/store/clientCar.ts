import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCar } from "@/types/clientCar";
import { defaultPaginate, type Paginate } from "@/types/paginate";
import { cloneDeep } from "lodash";

export const useClientCarStore = defineStore("clientCar", () => {
  const defaultClientCarFilters = {
    name: {
      type: "like",
      val: null,
    },
    user_phone: {
      type: "like",
      val: null,
    },
    made_at: {
      type: "like",
      val: null,
    },
    status_id: {
      type: "like",
      val: null,
    },
    car_number: {
      type: "like",
      val: null,
    },
  };

  const clientCarFilters:any = ref<{}>(cloneDeep(defaultClientCarFilters));
  const clientCars = ref<ClientCar[]>([]);
  const archivedClientCars = ref<ClientCar[]>([]);
  const getClientCars = computed(() => clientCars.value);
  const getArchivedClientCars = computed(() => archivedClientCars.value);

  const paginate = ref<Paginate>(defaultPaginate);

  const resetFilter = () => {
    clientCarFilters.value = cloneDeep(defaultClientCarFilters);
  };

  return {
    clientCars,
    clientCarFilters,
    archivedClientCars,
    getArchivedClientCars,
    getClientCars,
    paginate,
    resetFilter,
  };
});
