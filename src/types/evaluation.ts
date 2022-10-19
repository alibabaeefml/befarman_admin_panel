import type { User } from "./user";

export declare interface Evaluation {
  id: number;
  name: string;
  name_en: string;
  engine: string;
  body: string;
  chassis: string;
  tires: number;
  engine_oil: number;
  timing_belt: number;
  alternator_belt: number;
  front_pads: number;
  battery: string;
  wire_candle: number;
  gas_filter: number;
  gearbox_oil: number;
  vaskazin_oil: number;
  rear_pad: number;
  shock_absorber: number;
  user_id: number;
  client_car_id: number;
  verified: boolean;
  created_at: string;
  user: User;
}
