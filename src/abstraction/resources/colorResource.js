export function getArray(data) {
  return data.map((color) => getJsonColor(color));
}

export const getJsonColor = (data) => ({
  id: data.id,
  name: data.name,
  name_en: data.name_en,
});
