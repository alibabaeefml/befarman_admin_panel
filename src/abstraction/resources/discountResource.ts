import type { dynamicObject } from "@/types/common";
import type { Discount } from "@/types/discount";
import { setPagination } from "@/utils/createQueriesObject";

export const getJsonDiscount = (data: Discount) => ({
  applied_to: data.applied_to,
  client_car_id: data.client_car_id,
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  expiry_date: data.expiry_date,
  id: data.id,
  min_purchase: data.min_purchase,
  number_uses: data.number_uses,
  organization: data.organization,
  started_at: data.started_at,
  user_id: data.user_id,
});
export const getArrayDiscount = ({ data, meta }: dynamicObject) => {
  const pagination = setPagination(meta);
  data = data.map((discount: Discount) => getJsonDiscount(discount));
  return { data, pagination };
};
export const setDiscountData = (data: dynamicObject) => ({
  applied_to: data.applied_to,
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  expiry_date: data.expiry_date,
  min_purchase: data.min_purchase,
  number_uses: data.number_uses,
  organization: data.organization,
  started_at: data.started_at,
});
