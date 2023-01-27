import type { User } from "./user";
export declare interface Credit {
  code: string;
  credit: number;
  customer_id: number;
  customer: User;
  expiry_date: string;
  id: number;
  organization: string;
  user: User;
  user_id: number;
}
