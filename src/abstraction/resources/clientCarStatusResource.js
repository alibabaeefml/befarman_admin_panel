export function getArrayClientCarStatus(data) {
  return data.map((status) => getJsonClientCarStatus(status));
}

export const getJsonClientCarStatus = (data) => ({
  id: data.id,
  name_fa: data.name_fa,
  name_en: data.name_en,
  color: data.color,
  icon: data.icon,
  free: data.free,
});
