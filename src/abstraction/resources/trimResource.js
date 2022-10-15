export function getArray(data) {
  return data.map((trim) => getJson(trim));
};

export const getJsonTrim = (data) => ({
  id: data.id,
  name_en: data.name_en,
  name_fa: data.name_fa,
});
