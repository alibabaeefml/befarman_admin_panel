import { storeToRefs } from "pinia";
import DiscountRepository from "@/abstraction/repositories/discountRepository";
import { useDiscountStore } from "@/store/discount";

export function useDiscount() {
  const store = useDiscountStore();
  const repository = new DiscountRepository();
  const { getCredits, getDiscounts, paginate } = storeToRefs(store);

  const indexDiscount = async (paginate: {}) => {
    const { data, pagination } = await repository.indexDiscount(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.discounts = getDiscounts.value.concat(data);
    });
    return data;
  };
  const storeDiscount = async (discountData: Discount) => {
    const discount = await repository.storeDiscount(discountData);
    store.discounts.push(discount);
    return discount;
  };
  const updateDiscount = async (discountId: number, discountdata: Discount) => {
    const discount = await repository.updateDiscount(discountId, discountdata);

    const index = store.discounts.findIndex(
      (discount) => discount.id === discountId
    );
    store.discounts[index] = discount;

    return discount;
  };
  const deleteDiscount = async (discountId: number) => {
    await repository.deleteDiscount(discountId);
    store.discounts.map((e) => {
      if (e.id == discountId) {
        store.discounts.splice(store.discounts.indexOf(e), 1);
      }
    });
  };
  const indexCreditCard = async (paginate: {}) => {
    const { data, pagination } = await repository.indexCredit(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.credits = getCredits.value.concat(data);
    });
    return data;
  };
  const storeCreditCard = async (creditCardData: CreditCard) => {
    const credit = await repository.storeCredit(creditCardData);
    store.credits.push(credit);
    return credit;
  };
  const deleteCredit = async (creditId: number) => {
    await repository.deleteCredit(creditId);
    store.discounts.map((e) => {
      if (e.id == creditId) {
        store.discounts.splice(store.discounts.indexOf(e), 1);
      }
    });
  };
  return {
    indexDiscount,
    indexCreditCard,
    storeDiscount,
    updateDiscount,
    deleteDiscount,
    storeCreditCard,
    deleteCredit,
    getDiscounts,
    getCredits,
    paginate,
  };
}
