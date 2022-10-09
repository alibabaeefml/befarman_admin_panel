
import { setPagination } from "@/utils/createQueriesObject";

export function getArray({ data, meta }) {
    const pagination = setPagination(meta);
    data = data.map(car => getJson(car));
    return { data, pagination }
}

export const getJson = (data) => ({
    id:data.id,
    befarman_gps:data.befarman_gps,
    body_insurance:data.body_insurance,
    address:data.address,

})

export const setData = (data) => ({
    name_fa: data.name_fa,
    name_en: data.name_en,
    brand_id: data.brand_id,
    body_type_id: data.body_type_id,
    capacity: data.capacity,
    file_batch_id: data.file_batch_id,
})
