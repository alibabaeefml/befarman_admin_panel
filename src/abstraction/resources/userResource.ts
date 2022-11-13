import type { dynamicObject } from "@/types/common";
import { getArrayRelatives } from "./relativeResource";
import { getArrayComment } from "./commentResource";
import { setPagination } from "@/utils/createQueriesObject";
import { getArrayMedia } from "./mediaResource";

export function getArrayUsers({ data, meta }: dynamicObject) {
  const pagination = setPagination(meta);
  data.map((user: any) => getJsonUser(user));
  return { data, pagination };
}

export const getJsonUser = (data:dynamicObject) => ({
  id: data.id,
  name: data.name,
  first_name: data.first_name,
  last_name: data.last_name,
  phone: data.phone,
  national_code: data.national_code,
  father_name: data.father_name,
  status: data.status,
  verified: data.verified,
  cars_count: data.cars_count,
  requests_count: data.requests_count,
  address: data.address,
  province_id: data.province_id,
  born_city: data.born_city,
  city_id: data.city_id,
  job: data.job,
  workplace: data.workplace,
  born_year: data.born_year,
  home_phone: data.home_phone,
  citizenship: data.citizenship,
  passport_number: data.passport_number,
  education_rate: data.education_rate,
  license_number: data.license_number,
  location_type: data.location_type,
  work_phone: data.work_phone,
  relatives: getArrayRelatives(data.relatives ?? []),
  bank: data.bank ?? {},
  birthday: data.birthday,
  transactions_sum: data.transactions_sum,
  thumbnail: data.thumbnail,
  is_admin: data.is_admin,
  avg_vote: data.avg_vote,
  certificates: getArrayMedia(data.certificates ?? []),
  comments: getArrayComment(data.comments ?? []),
});

export const setData = (data) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  phone: data.phone,
  national_code: data.national_code,
  father_name: data.father_name,
  address: data.address,
  province_id: data.province_id,
  born_city: data.born_city,
  city_id: data.city_id,
  job: data.job,
  workplace: data.workplace,
  born_year: data.born_year,
  home_phone: data.home_phone,
  citizenship: data.citizenship,
  passport_number: data.passport_number,
  education_rate: data.education_rate,
  license_number: data.license_number,
  location_type: data.location_type,
  work_phone: data.work_phone,
  relatives: getArrayRelatives(data.relatives ?? []),
  bank: data.bank ?? {},
  birthday: data.birthday,
  certificates: getArrayMedia(data.certificates ?? []),
});
