import type { dynamicObject } from "@/types/common";

export const getJson = (data: dynamicObject) => ({
  id: data.id,
  name: data.name,
  province_id: data.province_id,
});
