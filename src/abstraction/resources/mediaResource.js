export function getArrayMedia(data) {
  return data.map((media) => getJsonMedia(media));
}

export const getJsonMedia = (data) => ({
  id: data.id,
  collection_name: data.collection_name,
  image: data.image,
  thumbnail_300: data.thumbnail_300,
  thumbnail: data.thumbnail,
  mime_type: data.mime_type,
  file_name: data.file_name,
  size: data.size,
});
