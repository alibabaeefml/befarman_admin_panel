export declare interface Invoice {
  id: number;
  rent: number;
  insurance: number;
  airport_charge: number;
  delivery_at_location: number;
  out_of_hours: number;
  additional_equipment: number;
  additional_driver: number;
  one_way_road: number;
  fine_deposit: number;
  cash_deposit: number;
  extra_day: number;
  extra_kilometers: number;
  extra_hours: number;
  fuel_deduction: number;
  carwash: number;
  damage: number;
  out_of_hours_refund: number;
  delivery_at_the_place_of_return: number;
  tax: number;
  discount: number;
  discount_id: null | number;
  credit_card: number;
  total_amount: number;
  car_request_id: number;
  user_id: number;
  closed: boolean | null;
}
