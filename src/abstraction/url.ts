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
  registerClientCarRequest: "client-car-requests",
  indexClientCarRequest: "admin/client-car-requests",
  ownerDeliveryClientCarRequest:
    "admin/client-car-requests/:clientCarRequestId/delivery-owner",
  userDeliveryClientCarRequest:
    "admin/client-car-requests/:clientCarRequestId/delivery-user",
  adminVerifyClientCarRequest:
    "admin/client-car-requests/:clientCarRequestId/check-admin",
  ownerVerifyClientCarRequest:
    "admin/client-car-requests/:clientCarRequestId/check-owner",
  showClientCarRequestInvoice:
    "admin/client-car-requests/:clientCarRequestId/invoice",
  updateClientCarRequestInvoice: "admin/invoices/:invoiceId",
  // Discounts
  indexDiscount:"admin/discounts",
  storeDiscount:"admin/discounts",
  updateDiscount:"admin/discounts/:discountId",
  deleteDiscount:"admin/discounts/:discountId",
  indexCreditCard:"admin/discounts/credit-card",
  storeCreditCard:"admin/discounts/credit",
  // auth
  sendCode: "login",
  logout: "logout",
  login: "login/code",
};

type URLGenerator = (url: string, params?: dynamicObject) => string;

const urlGenerators: URLGenerator = urlGenerator(urls);

export default urlGenerators;
