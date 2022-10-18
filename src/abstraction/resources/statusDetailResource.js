export function getArray(data) {
  return data.map(status => getJsonStatusDetail(status));
}

export const getJsonStatusDetail = (data) => ({
  id: data.id,
  name_fa: data.name_fa || data.name,
  name_en: data.name_en,
  color: data.color,
  icon: data.icon,
  free: data.free,
});
