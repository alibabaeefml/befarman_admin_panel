import type { ClientCar } from "./clientCar";
import type { User } from "./user";
import type {Delivery} from "./delivery"

export declare interface ClientCarRequest {
  id: number;
  car_info: ClientCar;
  delivery: Delivery[];
  user_requested: User;
}
