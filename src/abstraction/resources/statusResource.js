export function getArray(data) {
  return data.map((status) => getJson(status));
}

export const getJsonStatus = (data) => ({
  id: data.id,
  name_en: data.name_en,
  name_fa: data.name_fa,
  free: data.free,
  color: data.color,
  icon: data.icon,
});
