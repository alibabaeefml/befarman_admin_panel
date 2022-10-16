export function getArray(data) {
    return data.map((province) => getJsonProvince(province));
  }
  
  export const getJsonProvince = (data) => ({
    id: data.id,
    name: data.name,
  });
  