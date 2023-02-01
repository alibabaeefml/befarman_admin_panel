import type { dynamicObject } from "@/types/common";
import type { Discount } from "@/types/discount";
import { setPagination } from "@/utils/createQueriesObject";

export const getJsonDiscount = (data: Discount) => ({
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  customer: data.customer,
  expiry_date: data.expiry_date,
  id: data.id,
  min_purchase: data.min_purchase,
  number_uses: data.number_uses,
  started_at: data.started_at,
  client_car_id: data.client_car_id,
  clientCar: data.clientCar,
  user_id: data.user_id,
  user: data.user,
});
export const getArrayDiscount = ({ data, meta }: dynamicObject) => {
  const pagination = setPagination(meta);
  data = data.map((discount: Discount) => getJsonDiscount(discount));
  return { data, pagination };
};
export const setDiscountData = (data: dynamicObject) => ({
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  expiry_date: data.expiry_date,
  min_purchase: data.min_purchase,
  number_uses: data.number_uses,
  started_at: data.started_at,
  client_car_id: data.client_car_id,
  user_id: data.user_id,
  user: data.user,
});
