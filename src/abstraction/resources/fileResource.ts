import { objectToFormData } from "@/utils/object-to-formdata";

export const getJson = (data: FileResponse) : FileResponse => ({
  id: data.id,
  url: data.url,
});

export const setData = (data: FileSetData) =>
  objectToFormData({
    file: data.file,
    crop: data.crop,
    batch_id: data.batch_id,
    collection_name: data.collection_name,
    model_name: data.model_name,
    url: data.url,
});

export interface FileResponse {
  id: number,
  url: string,
}

export interface FileSetData {
  file?: File,
  crop?: Crop,
  batch_id: string,
  collection_name: string,
  model_name: string,
  url?: string,
}

interface Crop {
  top: string | number,
  left: string | number,
  width: string | number,
  height: string | number
}
