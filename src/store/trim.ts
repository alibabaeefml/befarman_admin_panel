import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Trim } from "@/types/trim";
import TrimRepository from "@/abstraction/repositories/trimRepository";

export const useTrimStore = defineStore("trim", () => {
  const trims = ref<Trim[]>([]);
  const allTrims = ref<Trim[]>([]);
  const getTrims = computed(() => trims.value);
  const getAllTrims = computed(() => allTrims.value);

  const loadTrims = async () => {
    if (trims.value.length) {
      return trims.value;
    }
    const repository = new TrimRepository();
    trims.value = await repository.index();
    return trims.value;
  };

  const loadAllTrims = async () => {
    if (allTrims.value.length) {
      return allTrims.value;
    }
    const repository = new TrimRepository();
    allTrims.value = await repository.indexAll();
    return allTrims.value;
  };

  return { trims, getTrims, loadTrims, loadAllTrims, allTrims, getAllTrims };
});
