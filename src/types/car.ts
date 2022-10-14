import Brand from "@/types/brand";
import BodyType from "@/types/bodyType";

export default interface Car {
    id: number,
    name_fa: string,
    name_en: string,
    brand_id: number,
    thumbnail: string,
    body_type_id: number,
    capacity: number,
    brand: Brand,
    bodyType: BodyType
};