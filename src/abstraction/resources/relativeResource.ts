export const getArrayRelatives = (data) =>
  data.map((relative) => ({
    name: relative.name,
    address: relative.address,
    phone: relative.phone,
    relative: relative.relative,
  }));
