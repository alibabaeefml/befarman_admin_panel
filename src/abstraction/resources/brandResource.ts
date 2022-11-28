import type { dynamicObject } from "@/types/common";

export function getArray(data: []) {
  return data.map((brand) => getJson(brand));
}

export const getJson = (data: dynamicObject) => ({
  id: data.id,
  name_fa: data.name_fa,
  name_en: data.name_en,
});
