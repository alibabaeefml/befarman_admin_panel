import type { dynamicObject } from "@/types/common";

export function getArray(data: dynamicObject[]) {
  return data.map((trim: dynamicObject) => getJsonTrim(trim));
}

export const getJsonTrim = (data: dynamicObject) => ({
  id: data.id,
  name_en: data.name_en,
  name_fa: data.name_fa,
});
