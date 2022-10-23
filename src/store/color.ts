import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Color } from "@/types/color";
import ColorRepository from "@/abstraction/repositories/colorRepository";

export const useColorStore = defineStore("color", () => {
  const colors = ref<Color[]>([]);
  const getColors = computed(() => colors.value);

  const loadColors = async () => {
    if (colors.value.length) {
      return colors.value;
    }
    const repository = new ColorRepository();
    colors.value = await repository.index();
    return colors.value;
  };

  return { colors, getColors, loadColors };
});
