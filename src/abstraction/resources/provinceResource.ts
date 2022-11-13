import type { dynamicObject } from "@/types/common";

export function getArray(data: dynamicObject[]) {
  return data.map((province: dynamicObject) => getJsonProvince(province));
}

export const getJsonProvince = (data: dynamicObject) => ({
  id: data.id,
  name: data.name,
});
