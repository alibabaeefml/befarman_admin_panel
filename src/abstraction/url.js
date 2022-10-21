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
  indexClientCar: "admin/client-cars",
  showClientCar: "admin/client-cars/:car",
  storeClientCar: "admin/client-cars",
  updateClientCar: "admin/client-cars/:car",
  destroyClientCar: "admin/client-cars/:car",
  indexStatus: "client-car-status",
  indexColor: "colors",
  indexProvince: "provinces",
  indexEvaluation:"evaluations",
  // save files
  storeFiles: "media",

  // auth
  sendCode: "login",
  logout: "logout",
  login: "login/code",
};

export default urlGenerator(urls);
