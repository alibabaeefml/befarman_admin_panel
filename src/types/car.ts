import type { Brand } from "./brand";
import type { BodyType } from "./bodyType";

export declare interface Car {
  id: number;
  name_fa: string;
  name_en: string;
  brand_id: number;
  thumbnail: string | null;
  body_type_id: number | null;
  capacity: number | null;
  brand?: Brand;
  bodyType?: BodyType | null;
}
