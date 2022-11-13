import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ClientCarStatus } from "../types/status";
import StatusRepository from "@/abstraction/repositories/statusRepository";

export const useStatusStore = defineStore("status", () => {
  const statuses = ref<ClientCarStatus[]>([]);
  const getStatuses = computed(() => statuses.value);

  const loadStatuses = async () => {
    if (statuses.value.length) {
      return statuses.value;
    }
    const repository = new StatusRepository();
    statuses.value = await repository.index();
    return statuses.value;
  };

  return { statuses, getStatuses, loadStatuses };
});
