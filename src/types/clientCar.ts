import Trim from "./brand"; // both the same type
import Car from "./car";
import City from "./city";
import Color from "./color";
import Owner from "./owner";
import User from "./user";
import Status from "./status"

export default interface clientCar {
  id: number,
  user: User,
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
  status: Status,
  car: Car,
  trim: Trim,
  owner: Owner,
  city: City,
  color: Color,
  color_id: number,
  thumbnail_300: string,
  thumbnail: string,
  avg_vote: number,
  is_rented: boolean,
  car_delivery: boolean,
  instant_booking: boolean,
  fast_reserve: boolean,
  gearbox: string,
  address: string,
  car_price: number,
  cost: number,
  rent_cost: number,
}
