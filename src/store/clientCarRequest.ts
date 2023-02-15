import type { ClientCarRequest } from "@/types/clientCarRequest";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { defaultPaginate, type Paginate } from "@/types/paginate";
import { cloneDeep } from "lodash";

export const useClientCarRequestStore = defineStore("clientCarRequest", () => {

  const clientCarRequests = ref<ClientCarRequest[]>([]);
  const archivedClientCarRequests = ref<ClientCarRequest[]>([]);
  const getClientCarRequests = computed(() => clientCarRequests.value);
  const getArchivedClientCarRequests = computed(
    () => archivedClientCarRequests.value
  );

  const defaultClientCarRequestFilters = {
    clientCar_car_name: {
      type: "like",
      val: null,
    },
    clientCar_car_number: {
      type: "like",
      val: null,
    },
    clientCar_user_name: {
      type: "like",
      val: null,
    },
    user_phone: {
      type: "like",
      val: null,
    },
    created_at: {
      type: "between",
      val1: null,
      val2:null
    },
    clientCar_request_status_id: {
      type: "like",
      val: null,
    },
  };

  const clientCarRequestFilters:any = ref<{}>(cloneDeep(defaultClientCarRequestFilters));
  const resetFilter = () => {
    clientCarRequestFilters.value = cloneDeep(defaultClientCarRequestFilters);
  };
  const paginate = ref<Paginate>(defaultPaginate);
  
  return {
    clientCarRequests,
    archivedClientCarRequests,
    getClientCarRequests,
    getArchivedClientCarRequests,
    paginate,
    clientCarRequestFilters,
    resetFilter
  };
});
