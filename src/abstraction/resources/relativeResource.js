export function getArray(data) {
  return data.map((relative) => getJsonRelatives(relative));
};

export const getJsonRelatives = (data) => ({
  name: data.name,
  address: data.address,
  phone: data.phone,
  relative: data.relative,
});
