import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCarStatus } from "@/types/clientCarStatus";
import ClientCarStatusRepository from "@/abstraction/repositories/clientCarStatusRepository";

export const useClientCarStatusStore = defineStore("clientCarstatus", () => {
  const statuses = ref<ClientCarStatus[]>([]);
  const getClientCarStatuses = computed(() => statuses.value);
  const repository = new ClientCarStatusRepository();
  const loadStatuses = async () => {
    if (statuses.value.length) {
      return statuses.value;
    }
    statuses.value = await repository.index();
    return statuses.value;
  };
  const changeStatus = async (carId, statusId) => {
    await repository.change(carId, statusId);
    return;
  };
  return { statuses, getClientCarStatuses, loadStatuses, changeStatus };
});
