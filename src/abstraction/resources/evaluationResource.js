import { getJsonUser } from "./userResource";

export function getArrayEvaluation(data) {
  return data.map((evaluation) => getJsonEvaluation(evaluation));
}

export const getJsonEvaluation = (data) => ({
  id: data.id,
  name: data.name,
  name_en: data.name_en,
  engine: data.engine,
  body: data.body,
  chassis: data.chassis,
  tires: data.tires,
  engine_oil: data.engine_oil,
  timing_belt: data.timing_belt,
  alternator_belt: data.alternator_belt,
  front_pads: data.front_pads,
  battery: data.battery,
  wire_candle: data.wire_candle,
  gas_filter: data.gas_filter,
  gearbox_oil: data.gearbox_oil,
  vaskazin_oil: data.vaskazin_oil,
  rear_pad: data.rear_pad,
  shock_absorber: data.shock_absorber,
  user_id: data.user_id,
  client_car_id: data.client_car_id,
  verified: data.verified,
  created_at: data.created_at,
  user: getJsonUser(data.user ?? {}),
});
