import type { dynamicObject } from "@/types/common";
export function getArray(data: []) {
  return data.map((brand) => getJson(brand));
}

export const getJson = (data: dynamicObject) => ({
  id: data.id,
  name: data.name,
  name_en: data.name_en,
});
