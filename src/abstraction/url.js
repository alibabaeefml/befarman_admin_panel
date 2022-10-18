import { urlGenerator } from "@/services/url.services";

const urls = {
  // abstract car
  indexCar: "abstract-car",
  storeCar: "abstract-car",
  updateCar: "abstract-car/:car",
  destroyCar: "abstract-car/:car",

  //brand
  indexBrand: "brands",

  //trims
  indexTrim: "trims",

  //bodyType
  indexBodyType: "body-types",

  // client car
  indexClientCar: "admin/client-car",
  showClientCar: "admin/client-car/:car",
  storeClientCar: "admin/client-car",
  updateClientCar: "admin/client-car/:car",
  destroyClientCar: "admin/client-car/:car",
  indexStatus: "client-car-status",
  indexColor: "colors",
  indexProvince: "provinces",
  // save files
  storeFiles: "media",

  // auth
  sendCode: "login",
  logout: "logout",
  login: "login/code",
};

export default urlGenerator(urls);
