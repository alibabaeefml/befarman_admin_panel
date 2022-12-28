import type { ClientCar } from "./clientCar";
import type { ClientCarRequestStatus } from "./clientCarRequestStatus";
export declare interface ClientCarRequest {
  client_car_id: number;
  user_id: number;
  insurance_type_id: number;
  clientCar: ClientCar;
  start_delivery_place: string;
  end_delivery_place: string;
  start_at: string;
  end_at: string;
  contract_file_name: string;
  additional_driver: boolean;
  airport_charge: boolean;
  delivery_at_location: boolean;
  delivery_at_the_place_of_return: boolean;
  one_way_road: boolean;
  in_progress: boolean;
  latestClientCarRequestStatus: ClientCarRequestStatus;
}
