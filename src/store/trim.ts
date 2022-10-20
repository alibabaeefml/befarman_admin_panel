import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Trim from "@/types/trim";
import TrimRepository from "@/abstraction/repositories/trimRepository";

export const useTrimStore = defineStore("trim", () => {
  const trims = ref<Trim[]>([]);
  const getTrims = computed(() => trims.value);

  const loadTrims = async () => {
    if (trims.value.length) {
      return trims.value;
    }
    const repository = new TrimRepository();
    trims.value = await repository.index();
    return trims.value;
  };

  return { trims, getTrims, loadTrims };
});
