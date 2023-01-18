import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { defaultPaginate, type Paginate } from "@/types/paginate";
export const useDiscountStore = defineStore("discount", () => {
  const discounts = ref<Discount[]>([]);
  const credits = ref<Credit[]>([]);

  const paginate = ref<Paginate>(defaultPaginate);
  const getDiscounts = computed(() => discounts.value);
  const getCredits = computed(() => credits.value);
  return {
    credits,
    discounts,
    getDiscounts,
    getCredits,
    paginate
  };
});
