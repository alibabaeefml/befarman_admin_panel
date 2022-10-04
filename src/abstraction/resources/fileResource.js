import { objectToFormData } from "@/utils/object-to-formdata";

export const getJson = (data) => ({
    id: data.id,
    url: data.url,
});

export const setData = (data) => (
    objectToFormData({
        file: data.file,
        crop: data.crop,
        batch_id: data.batch_id,
        collection_name: data.collection_name,
        model_name: data.model_name,
        url: data.url,
    }));