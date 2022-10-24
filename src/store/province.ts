import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {Province} from "@/types/Province";
import ProvinceRepository from "@/abstraction/repositories/provinceRepository";

export const useProvinceStore = defineStore("province", () => {
  const provinces = ref<Province[]>([]);
  const getProvinces = computed(() => provinces.value);
  const repository = new ProvinceRepository();
  const loadProvinces = async () => {
    if (provinces.value.length) {
      return provinces.value;
    }
    provinces.value = await repository.index();
    return provinces.value;
  };
  const showCity = async (provinceId) => {
    return await repository.show(provinceId)
  };

  return { provinces, getProvinces, loadProvinces, showCity };
});
