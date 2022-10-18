import type {Trim} from "./trim"; // both the same type
import type {Brand} from "./brand"; // both the same type
import type {Car} from "./car";
import type {City} from "./city";
import type {Color} from "./color";
import type {User} from "./user";
import type {StatusDetail} from "./statusDetail"

export declare interface ClientCar {
  id: number;
  user: User;
  user_id: number;
  name: string;
  painted: string;
  car_number: string;
  color_status: string;
  made_at: number;
  details: string;
  car_usage: string;
  status_id: number;
  contract: string;
  fuel: string;
  changed_parts: string;
  last_oil_change: number;
  insurance_discount: number;
  gps: string;
  befarman_gps: number;
  insurance: number;
  body_insurance: number;
  third_party_insurance: number;
  original_price: number;
  price: number;
  features: string;
  status_detail: StatusDetail;
  car: Car;
  trim: Trim;
  city: City;
  color: Color;
  color_id: number;
  thumbnail_300: string;
  thumbnail: string;
  avg_vote: number;
  is_rented: boolean;
  car_delivery: boolean;
  instant_booking: boolean;
  fast_reserve: boolean;
  gearbox: string;
  address: string;
  car_price: number;
  cost: number;
  rent_cost: number;
  brand?: Brand | null;
}
