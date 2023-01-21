export declare interface Discount {
  applied_to: string;
  client_car_id?: number;
  code: string;
  credit: number;
  customer_id?: number;
  expiry_date?: string;
  id: number;
  min_purchase?: number;
  number_uses: number;
  organization?: string;
  started_at?: string;
  user_id: number;
};