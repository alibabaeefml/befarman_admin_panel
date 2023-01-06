import type { Invoice } from "@/types/invoice";
import type { dynamicObject } from "@/types/common";

export const getJsonInvoice = (
  data: Invoice
) => ({
  id: data.id,
  rent: data.rent,
  insurance: data.insurance,
  airport_charge: data.airport_charge,
  delivery_at_location: data.delivery_at_location,
  out_of_hours: data.out_of_hours,
  additional_equipment: data.additional_equipment,
  additional_driver: data.additional_driver,
  one_way_road: data.one_way_road,
  fine_deposit: data.fine_deposit,
  cash_deposit: data.cash_deposit,
  extra_day: data.extra_day,
  extra_kilometers: data.extra_kilometers,
  extra_hours: data.extra_hours,
  fuel_deduction: data.fuel_deduction,
  carwash: data.carwash,
  damage: data.damage,
  out_of_hours_refund: data.out_of_hours_refund,
  delivery_at_the_place_of_return: data.delivery_at_the_place_of_return,
  tax: data.tax,
  discount: data.discount,
  discount_id: data.discount_id,
  total_amount: data.total_amount,
  car_request_id: data.car_request_id,
  user_id: data.user_id,
  closed: data.closed,
});
export const setInvoiceData = (
    data: dynamicObject
  ) => ({
    id: data.id,
    rent: data.rent,
    insurance: data.insurance,
    airport_charge: data.airport_charge,
    delivery_at_location: data.delivery_at_location,
    out_of_hours: data.out_of_hours,
    additional_equipment: data.additional_equipment,
    additional_driver: data.additional_driver,
    one_way_road: data.one_way_road,
    fine_deposit: data.fine_deposit,
    cash_deposit: data.cash_deposit,
    extra_day: data.extra_day,
    extra_kilometers: data.extra_kilometers,
    extra_hours: data.extra_hours,
    fuel_deduction: data.fuel_deduction,
    carwash: data.carwash,
    damage: data.damage,
    out_of_hours_refund: data.out_of_hours_refund,
    delivery_at_the_place_of_return: data.delivery_at_the_place_of_return,
    tax: data.tax,
    discount: data.discount,
    discount_id: data.discount_id,
    total_amount: data.total_amount,
    car_request_id: data.car_request_id,
    user_id: data.user_id,
    closed: data.closed,
  });
  