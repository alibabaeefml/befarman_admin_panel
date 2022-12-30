import type { ClientCarRequest } from "@/types/clientCarRequest";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { defaultPaginate, type Paginate } from "@/types/paginate";
export const useClientCarRequestStore = defineStore("clientCarRequest", () => {
  const clientCarRequests = ref<ClientCarRequest[]>([]);
  const archivedClientCarRequests = ref<ClientCarRequest[]>([]);
  const getClientCarRequests = computed(() => clientCarRequests.value);
  const getArchivedClientCarRequests = computed(
    () => archivedClientCarRequests.value
  );

  const paginate = ref<Paginate>(defaultPaginate);
  return {
    clientCarRequests,
    archivedClientCarRequests,
    getClientCarRequests,
    getArchivedClientCarRequests,
    paginate,
  };
});
