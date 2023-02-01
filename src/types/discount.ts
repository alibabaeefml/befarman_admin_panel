import type { ClientCar } from "./clientCar";
import type { User } from "./user";

export declare interface Discount {
  code: string;
  credit: number;
  customer_id?: number;
  expiry_date?: string;
  id: number;
  min_purchase?: number;
  number_uses: number;
  organization?: string;
  started_at?: string;
  customer?: User;
  client_car_id?: number;
  clientCar?: ClientCar;
  user: User;
  user_id: number;
}
