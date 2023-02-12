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
    name: {
      type: "like",
      val: null,
    },
    user_name: {
      type: "like",
      val: null,
    },
    made_at: {
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
