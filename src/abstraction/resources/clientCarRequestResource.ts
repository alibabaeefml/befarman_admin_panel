import type { ClientCarRequest } from "@/types/clientCarRequest";
import type { dynamicObject } from "@/types/common";
import { setPagination } from "@/utils/createQueriesObject";
import { getJsonClientCarRequestStatus } from "./clientCarRequestStatusResource";

export function getArrayClientCarRequest({ data, meta }: dynamicObject) {
  const pagination = setPagination(meta);
  data = data.map((clientCarRequest: dynamicObject) =>
    getJsonClientCarRequest(clientCarRequest)
  );
  return { data, pagination };
}

export const getJsonClientCarRequest = (data: dynamicObject) => ({
  id: data.id,
  client_car_id: data.client_car_id,
  user_id: data.user_id,
  insurance_type_id: data.insurance_type_id,
  clientCar: data.clientCar,
  user: data.user,
  start_delivery_place: data.start_delivery_place,
  end_delivery_place: data.end_delivery_place,
  start_at: data.start_at,
  end_at: data.end_at,
  contract_file_name: data.contract_file_name,
  additional_driver: !!data.additional_driver,
  airport_charge: !!data.airport_charge,
  delivery_at_location: !!data.delivery_at_location,
  delivery_at_the_place_of_return: !!data.delivery_at_the_place_of_return,
  one_way_road: !!data.one_way_road,
  in_progress: !!data.in_progress,
  latestClientCarRequestStatus: getJsonClientCarRequestStatus(
    data.latestClientCarRequestStatus ?? {}
  ),
});
