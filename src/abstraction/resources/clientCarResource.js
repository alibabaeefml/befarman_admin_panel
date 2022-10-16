import { getJson as getJsonCar } from "./carResource";
import { setPagination } from "@/utils/createQueriesObject";
import { getJson as getJsonCity } from "./cityResource";
import { getJsonUser } from "./userResource";
import { getJsonColor } from "./colorResource";
import { getJsonTrim } from "./trimResource";
import {getJsonOwner} from "./ownerResource";
export function getArray({ data, meta }) {
  const pagination = setPagination(meta);
  data = data.map((car) => getJson(car));
  return { data, pagination };
}

export const getJson = (data) => ({
  id: data.id,
  user: getJsonUser(data.user ? data.user : {}),
  user_id: data.user_id,
  name: data.name,
  painted: data.painted,
  car_number: data.car_number,
  color_status: data.color_status,
  made_at: data.made_at,
  details: data.details,
  car_usage: data.car_usage,
  status_id: data.status_id,
  contract: data.contract,
  fuel: data.fuel,
  changed_parts: data.changed_parts,
  last_oil_change: data.last_oil_change,
  insurance_discount: data.insurance_discount,
  gps: data.gps,
  befarman_gps: data.befarman_gps,
  insurance: data.insurance,
  body_insurance: data.body_insurance,
  third_party_insurance: data.third_party_insurance,
  original_price: data.original_price,
  price: data.price,
  features: data.features,
  status: data.status,
  car: getJsonCar(data.car ? data.car : {}),
  trim: getJsonTrim(data.trim ? data.trim : {}),
  owner: getJsonOwner(data.owner ? data.owner : {}),
  city: getJsonCity(data.city ? data.city : {}),
  color: getJsonColor(data.color ? data.color : {}),
  color_id: data.color_id,
  thumbnail_300: data.thumbnail_300,
  thumbnail: data.thumbnail,
  avg_vote: data.avg_vote,
  is_rented: data.is_rented,
  car_delivery: data.car_delivery,
  instant_booking: data.instant_booking,
  fast_reserve: data.fast_reserve,
  gearbox: data.gearbox,
  city_id: data.city_id,
  address: data.address,
  car_price: data.car_price,
  cost: data.cost,
  rent_cost: data.rent_cost,
});

export const setData = (data) => ({
  name_fa: data.name_fa,
  name_en: data.name_en,
  brand_id: data.brand_id,
  body_type_id: data.body_type_id,
  capacity: data.capacity,
  file_batch_id: data.file_batch_id,
});
