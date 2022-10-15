export function getArray(data) {
    return data.map((province) => getJson(province));
  }
  
  export const getJsonColor = (data) => ({
    id: data.id,
    name: data.name,
  });
  