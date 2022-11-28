import { setPagination } from "@/utils/createQueriesObject";
import { getJson as getJsonBrand } from "./brandResource";
import { getJson as getJsonBodyType } from "./bodyTypeResource";
import type { dynamicObject } from "@/types/common";

export function getArray({ data, meta }: dynamicObject) {
  const pagination = setPagination(meta);
  data = data.map((car: dynamicObject) => getJson(car));
  return { data, pagination };
}

export const getJson = (data: dynamicObject) => ({
  id: data.id,
  name_fa: data.name_fa,
  name_en: data.name_en,
  brand_id: data.brand_id,
  thumbnail: data.thumbnail,
  body_type_id: data.body_type_id,
  capacity: data.capacity,
  bodyType: getJsonBodyType(data.bodyType ? data.bodyType : {}),
  brand: getJsonBrand(data.brand ? data.brand : {}),
});

export const setData = (data: dynamicObject) => ({
  name_fa: data.name_fa,
  name_en: data.name_en,
  brand_id: data.brand_id,
  body_type_id: data.body_type_id,
  capacity: data.capacity,
  file_batch_id: data.file_batch_id,
});
