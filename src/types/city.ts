import Province from "./province";

interface City {
  id: number,
  name: string
  province_id: number,
  province: Province, 
}

export default City;
