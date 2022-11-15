import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Brand } from "@/types/brand";
import BrandRepository from "@/abstraction/repositories/brandRepository";
export const useBrandStore = defineStore("brand", () => {
  const brands = ref<Brand[]>([]);
  const getBrands = computed(() => brands.value);

  const loadBrands = async () => {
    if (brands.value.length) {
      return brands.value;
    }
    const repository = new BrandRepository();
    brands.value = await repository.index();
    return brands.value;
  };

  return { brands, getBrands, loadBrands };
});
