import { getJson as getJsonCar } from "./carResource";
import { setPagination } from "@/utils/createQueriesObject";
import { getJson as getJsonCity } from "./cityResource";
import { getJsonUser } from "./userResource";
import { getJsonColor } from "./colorResource";
import { getJsonTrim } from "./trimResource";
import {
  getJsonClientCarStatus,
  getArrayClientCarStatus,
} from "./clientCarStatusResource";
import { getJson as getJsonBrand } from "./brandResource";
import { getJsonEvaluation } from "./evaluationResource";
import { getArrayComment } from "./commentResource";
import { getArrayMedia } from "./mediaResource";
import type { dynamicObject } from "@/types/common";
import type { ClientCar } from "@/types/clientCar";

export function getArray({ data, meta }: dynamicObject) {
  const pagination = setPagination(meta);
  data = data.map((car: dynamicObject) => getJson(car));
  return { data, pagination };
}

export const getJson = (data: dynamicObject) => ({
  id: data.id,
  user_id: data.user_id,
  name: data.name,
  painted: data.painted,
  car_number: data.car_number,
  color_status: data.color_status,
  made_at: data.made_at,
  details: data.details,
  car_usage: data.car_usage,
  status_id: data.status_id,
  fuel: data.fuel,
  changed_parts: data.changed_parts,
  last_oil_change: data.last_oil_change,
  insurance_discount: data.insurance_discount,
  gps: data.gps,
  befarman_gps: data.befarman_gps == 1,
  body_insurance: data.body_insurance == 1,
  third_party_insurance: data.third_party_insurance == 1,
  original_price: data.original_price,
  price: data.price,
  features: data.features,
  color_id: data.color_id,
  thumbnail_300: data.thumbnail_300,
  thumbnail: data.thumbnail,
  avg_vote: data.avg_vote,
  is_rented: data.is_rented,
  car_delivery: data.car_delivery,
  car_id: data.car_id,
  instant_booking: data.instant_booking,
  fast_reserve: data.fast_reserve,
  gearbox: data.gearbox == "manual" ? "دستی" : "اتوماتیک",
  city_id: data.city_id,
  trim_id: data.trim_id,
  province_id: data.province_id,
  address: data.address,
  car_price: data.car_price,
  lat: data.lat,
  long: data.long,
  organization: data.organization,
  technical_status: data.technical_status == 1,
  brand: getJsonBrand(data.brand ? data.brand : {}),
  user: getJsonUser(data.user ? data.user : {}),
  car: getJsonCar(data.car ? data.car : {}),
  trim: getJsonTrim(data.trim ? data.trim : {}),
  city: getJsonCity(data.city ? data.city : {}),
  color: getJsonColor(data.color ? data.color : {}),
  evaluation: getJsonEvaluation(data.evaluation ? data.evaluation : {}),
  comments: getArrayComment(data.comments ? data.comments : []),
  requests: data.requests ? data.requests : [],
  images: getArrayMedia(data.images ? data.images : []),
  certificates: getArrayMedia(data.certificates ? data.certificates : []),
  clientCarStatus: getJsonClientCarStatus(
    data.clientCarStatus ? data.clientCarStatus : {}
  ),
  clientCarStatuses: getArrayClientCarStatus(
    data.clientCarStatuses ? data.clientCarStatuses : []
  ),
});

export const setData = (data: ClientCar) => ({
  painted: data.painted,
  car_number: data.car_number,
  color_status: data.color_status,
  made_at: data.made_at,
  details: data.details,
  car_usage: data.car_usage,
  fuel: data.fuel,
  changed_parts: data.changed_parts,
  last_oil_change: data.last_oil_change,
  insurance_discount: data.insurance_discount,
  gps: data.gps,
  befarman_gps: !!data.befarman_gps,
  body_insurance: !!data.body_insurance,
  third_party_insurance: !!data.third_party_insurance,
  original_price: data.original_price,
  price: data.price,
  features: data.features,
  color_id: data.color_id,
  gearbox: data.gearbox == "اتوماتیک" ? "automatic" : "manual",
  city_id: data.city_id,
  province_id: data.province_id,
  address: data.address,
  car_price: data.car_price,
  car_id: data.car_id,
  lat: data.lat,
  long: data.long,
  trim_id: data.trim_id,
  file_batch_id: data.file_batch_id,
  organization: data.organization,
  technical_status: !!data.technical_status,
  brand: getJsonBrand(data.brand ?? {}),
  user: getJsonUser(data.user ?? {}),
  car: getJsonCar(data.car ?? {}),
  images: getArrayMedia(data.images ?? []),
  certificates: getArrayMedia(data.certificates ?? []),
});
