import type { dynamicObject } from "@/types/common";
export function getArrayClientCarStatus(data: dynamicObject) {
  return data.map((status: dynamicObject) => getJsonClientCarStatus(status));
}

export const getJsonClientCarStatus = (data: dynamicObject) => ({
  id: data.id,
  name_fa: data.name_fa,
  name_en: data.name_en,
  color: data.color,
  icon: data.icon,
  free: data.free,
});
