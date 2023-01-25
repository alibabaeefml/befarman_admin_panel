import type { Path } from "./routeHandler";
const paths: Path[] = [
  {
    path: "/login",
    name: "login",
    view: "Login",
    meta: {
      auth: true,
      title: "ورود",
      title_en: "Login",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    view: "Dashboard",
    meta: {
      auth: true,
      title: "داشبورد",
      title_en: "Dashboard",
    },
  },
  {
    path: "/client-cars",
    name: "clientCars",
    view: "ClientCars",
    meta: {
      auth: true,
      title: "لیست خودرو های اجاره ای",
      title_en: "Client Cars List",
    },
  },
  {
    path: "/client-cars/add",
    name: "addClientCar",
    view: "ClientCarAddEdit",
    meta: {
      auth: false,
      title: "افزودن خودرو اجاره ای",
      title_en: "Add Client Car",
    },
  },
  {
    path: "/client-cars/:id/edit",
    name: "editClientCar",
    view: "ClientCarAddEdit",
    meta: {
      auth: false,
      title: "ویرایش خودرو اجاره ای",
      title_en: "Edit Client Car",
    },
  },
  {
    path: "/client-cars/:id",
    name: "clientCarDetails",
    view: "ClientCarDetails",
    meta: {
      auth: false,
      title: "جزئیات خودرو اجاره ای",
      title_en: "Client Car Details",
    },
  },
  {
    path: "/users",
    name: "users",
    view: "Users",
    meta: {
      auth: true,
      title: "لیست کاربران",
      title_en: "Users List",
    },
  },
  {
    path: "/users/:id",
    name: "userDetails",
    view: "UserInfo",
    meta: {
      auth: true,
      title: "اطلاعات کاربر",
      title_en: "User Info",
    },
  },
  {
    path: "/users/add",
    name: "addUser",
    view: "UserAddEdit",
    meta: {
      auth: true,
      title: "افزودن کاربر",
      icon: "mdi-account-plus",
      title_en: "Add User",
    },
  },
  {
    path: "/users/:id/edit",
    name: "editUser",
    view: "UserAddEdit",
    meta: {
      auth: true,
      title: "ویرایش کاربر",
      icon: "mdi-account-edit",
      title_en: "Edit User",
    },
  },
  {
    path: "/cars",
    name: "cars",
    view: "Cars",
    meta: {
      auth: true,
      title: "لیست خودرو ها",
      title_en: "Cars List",
    },
  },
  {
    path: "/requests",
    name: "requests",
    view: "ClientCarRequests",
    meta: {
      auth: true,
      title: "لیست درخواست ها",
      title_en: "Requests List",
    },
  },
  {
    path: "/requests/:id",
    name: "requestDetails",
    view: "ClientCarRequestDetails",
    meta: {
      auth: false,
      title: "جزئیات درخواست",
      title_en: "Requset Details",
    },
  },
  {
    path: "/transactions",
    name: "transactions",
    view: "Transactions",
    meta: {
      auth: true,
      title: "لیست تراکنش ها",
      title_en: "Transactions List",
    },
  },
  {
    path: "/transactions/add",
    name: "addTransaction",
    view: "TransactionAddEdit",
    meta: {
      auth: true,
      title: "افزودن تراکنش",
      title_en: "Add Transaction",
      icon: "mdi-cash-plus",
    },
  },
  {
    path: "/transactions/:id/edit",
    name: "editTransaction",
    view: "TransactionAddEdit",
    meta: {
      auth: true,
      title: "ویرایش تراکنش",
      icon: "mdi-cash",
      title_en: "Edit Transaction",
    },
  },
  {
    path: "/sms-management",
    name: "smsManagement",
    view: "SmsManagement",
    meta: {
      auth: true,
      title: "مدیریت پیامک ها",
      title_en: "Sms Management",
    },
  },
  {
    path: "/discounts",
    name: "discounts",
    view: "Discounts",
    meta: {
      auth: true,
      title: "تخفیف ها",
      title_en: "Discounts",
    },
  },
];

export default paths;
