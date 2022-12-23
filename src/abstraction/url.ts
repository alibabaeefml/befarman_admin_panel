import { urlGenerator } from "@/services/url.services";
import type { dynamicObject } from "@/types/common";

const urls: dynamicObject = {
  // abstract car
  indexCar: "abstract-car",
  storeCar: "abstract-car",
  updateCar: "abstract-car/:car",
  destroyCar: "abstract-car/:car",

  //brand
  indexBrand: "brands",

  //trims
  indexTrim: "trims",
  indexAllTrim: "full-name-trims",
  indexTrimWithCar: "trims/:car",
  //bodyType
  indexBodyType: "body-types",

  // client car
  indexClientCar: "admin/client-cars",
  indexArchivedClientCar: "admin/client-cars/archive",
  showClientCar: "admin/client-cars/:clientCar",
  storeClientCar: "admin/client-cars",
  updateClientCar: "admin/client-cars/:car",
  archiveClientCar: "admin/client-cars/:car",
  restoreClientCar: "admin/client-cars/:car/restore",
  indexClientCarStatus: "client-car-status",
  changeClientCarStatus: "admin/client-cars/:car/change-status",
  indexColor: "colors",
  indexProvince: "provinces",
  showCity: "cities/:id",
  storeEvaluation: "client-cars/:clientCar/evaluations",
  showEvaluation: "client-cars/:clientCar/evaluations",

  // save files
  storeFiles: "media",

  // user
  indexUser: "admin/users",
  indexArchivedUser: "admin/users/archive",
  showUser: "admin/users/:user",
  storeUser: "admin/users",
  updateUser: "admin/users/:user",
  sms: "admin/sms/:user",
  archiveUser: "admin/users/:user",
  restoreUser: "admin/users/:user/restore",
  verifyUser: "admin/users/:user/verify",
  unverifyUser: "admin/users/:user/unverify",

  // request
  indexClientCarRequest: "admin/car-request",
  indexArchivedClientCarRequest: "admin/car-request/archive",
  showClientCarRequest: "admin/car-request/:clientCarRequest",
  storeClientCarRequest: "admin/car-request",
  updateClientCarRequest: "admin/car-request/:clientCarRequest",
  archiveClientCarRequest: "admin/car-request/:clientCarRequest",
  ownerAcceptClientCarRequest: "admin/car-request/:clientCarRequest/accept",
  ownerRejectClientCarRequest: "admin/car-request/:clientCarRequest/reject",
  indexClientCarRequestStatus:"car-request-status",
  // auth
  sendCode: "login",
  logout: "logout",
  login: "login/code",
};

type URLGenerator = (url: string, params?: dynamicObject) => string;

const urlGenerators: URLGenerator = urlGenerator(urls);

export default urlGenerators;
