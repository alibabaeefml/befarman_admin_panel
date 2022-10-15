import { getJson as getJsonCar } from "./carResource";
import { setPagination } from "@/utils/createQueriesObject";
import { getJson as getJsonCity } from "./cityResource";
import { getJson as getJsonUser } from "./userResource";
import { getJsonColor } from "./colorResource";
import { getJsonTrim } from "./trimResource";

export function getArray({ data, meta }) {
  const pagination = setPagination(meta);
  data = data.map((car) => getJson(car));
  return { data, pagination };
}

export const getJson = (data) => ({
  id: number,
  user: getJsonUser(data.user ? data.user : {}),
  user_id: number,
  name: string,
  painted: string,
  car_number: string,
  color_status: string,
  made_at: number,
  details: string,
  car_usage: string,
  status_id: number,
  contract: string,
  fuel: string,
  changed_parts: string,
  last_oil_change: number,
  insurance_discount: number,
  gps: string,
  befarman_gps: number,
  insurance: number,
  body_insurance: number,
  third_party_insurance: number,
  original_price: number,
  price: number,
  features: string,
  status: string,
  car: getJsonCar(data.car ? data.car : {}),
  trim: getJsonTrim(data.trim ? data.trim : {}),
  owner: getJsonOwner(data.owner ? data.owner : {}),
  city: getJsonCity(data.city ? data.city : {}),
  color: getJsonColor(data.color ? data.color : {}),
  color_id: number,
  thumbnail_300: string,
  thumbnail: string,
  avg_vote: number,
  is_rented: boolean,
  car_delivery: boolean,
  instant_booking: boolean,
  fast_reserve: boolean,
  gearbox: string,
  city_id: number,
  address: string,
  car_price: number,
  cost: number,
  rent_cost: number,
});

export const setData = (data) => ({
  name_fa: data.name_fa,
  name_en: data.name_en,
  brand_id: data.brand_id,
  body_type_id: data.body_type_id,
  capacity: data.capacity,
  file_batch_id: data.file_batch_id,
});
