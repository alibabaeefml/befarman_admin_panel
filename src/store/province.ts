import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Province from "@/types/Province";
import ProvinceRepository from "@/abstraction/repositories/provinceRepository";

export const useProvinceStore = defineStore("province", () => {
  const provinces = ref<Province[]>([]);
  const getProvinces = computed(() => provinces.value);

  const loadProvinces = async () => {
    if (provinces.value.length) {
      return provinces.value;
    }
    const repository = new ProvinceRepository();
    provinces.value = await repository.index();
    return provinces.value;
  };

  return { provinces, getProvinces, loadProvinces };
});
