import type { dynamicObject } from "@/types/common";
import type { Credit } from "@/types/credit";
import { setPagination } from "@/utils/createQueriesObject";

export const getJsonCredit = (data: Credit) => ({
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  customer: data.customer,
  expiry_date: data.expiry_date,
  id: data.id,
  organization: data.organization,
  user_id: data.user_id,
  user: data.user,
});
export const getArrayCredit = ({ data, meta }: dynamicObject) => {
  const pagination = setPagination(meta);
  data = data.map((credit: Credit) => getJsonCredit(credit));
  return { data, pagination };
};
export const setCreditData = (data: dynamicObject) => ({
  code: data.code,
  credit: data.credit,
  customer_id: data.customer_id,
  customer: data.customer,
  expiry_date: data.expiry_date,
  id: data.id,
  organization: data.organization,
  user_id: data.user_id,
  user: data.user,
});
