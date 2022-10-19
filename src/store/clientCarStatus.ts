import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCarStatus } from "@/types/clientCarStatus";
import ClientCarStatusRepository from "@/abstraction/repositories/clientCarStatusRepository";

export const useClientCarstatusStore = defineStore("clientCarstatus", () => {
  const statuses = ref<ClientCarStatus[]>([]);
  const getClientCarStatuses = computed(() => statuses.value);

  const loadStatuses = async () => {
    if (statuses.value.length) {
      return statuses.value;
    }
    const repository = new ClientCarStatusRepository();
    statuses.value = await repository.index();
    return statuses.value;
  };

  return { statuses, getClientCarStatuses, loadStatuses };
});
