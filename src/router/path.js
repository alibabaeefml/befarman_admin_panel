export default [
  {
    path: "/admin",
    name: "Admin",
    view: "Admin",
    redirect: "admin/home",
    children: [
      {
        path: "home",
        name: "Home",
        view: "Home",
        meta: {
          auth: true,
          title: "داشبورد",
        },
      },
      {
        path: "transaction",
        name: "transaction",
        view: "Transaction",
        meta: {
          auth: true,
          title: "تراکنش ها",
        },
      },
      {
        path: "sms-management",
        name: "SMSManagement",
        view: "SMSManagement",
        meta: {
          auth: true,
          title: "مدیریت پیامک ها",
        },
      },
      {
        path: "Car-List",
        name: "Car-List",
        view: "Car-List",
        meta: {
          auth: true,
          title: "لیست خودرو های اجاره ای",
        },
      },
      {
        path: "AddRentCar",
        name: "AddRentCar",
        view: "AddRentCar",
        meta: {
          auth: false,
          title: "افزودن خودرو اجاره ای",
        },
      },
      {
        path: "Users",
        name: "Users",
        view: "Users",
        meta: {
          auth: true,
          title: "لیست کاربران",
        },
      },
      {
        path: "Cars",
        name: "Cars",
        view: "Cars",
        meta: {
          auth: true,
          title: "لیست خودرو ها",
        },
      },
      {
        path: "Requests",
        name: "Requests",
        view: "Requests",
        meta: {
          auth: true,
          title: "لیست درخواست ها",
        },
      },
    ],
  },
  {
    path: "",
    name: "main-home",
    view: "main-home",
    meta: {
      auth: true,
      title: "صفحه اصلی",
      public: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    view: "Profile",
    meta: {
      auth: true,
      title: "پروفایل من",
    },
  },
  {
    path: "/login",
    name: "Login",
    view: "Login",
    meta: {
      auth: true,
      title: "ورود",
    },
  },
  {
    path: "/AllCars",
    name: "AllCars",
    view: "AllCars",
    meta: {
      public: true,
      auth: true,
      title: "لیست تمام خودرو ها",
    },
  },
  {
    path: "/AboutUs",
    name: "aboutUs",
    view: "aboutUs",
    meta: {
      public: true,
      auth: true,
      title: "درباره ما",
    },
  },
];
