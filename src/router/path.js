export default [
  {
    path: "/Admin",
    name: "ADMIN",
    view: "Admin",
    redirect: "admin/home",
    children: [
      {
        path: "Home",
        name: "HOME",
        view: "Home",
        meta: {
          auth: true,
          title: "داشبورد",
        },
      },
      {
        path: "Transaction",
        name: "TRANSACTION",
        view: "Transaction",
        meta: {
          auth: true,
          title: "تراکنش ها",
        },
      },
      {
        path: "Sms-Management",
        name: "SMS MANAGEMENT",
        view: "Sms-Management",
        meta: {
          auth: true,
          title: "مدیریت پیامک ها",
        },
      },
      {
        path: "Rental-Cars",
        name: "RENTAL CARS",
        view: "Rental-Cars",
        meta: {
          auth: true,
          title: "لیست خودرو های اجاره ای",
        },
      },
      {
        path: "Add-Rent-Car",
        name: "ADD NEW RENT CAR",
        view: "Add-Rent-Car",
        meta: {
          auth: false,
          title: "افزودن خودرو اجاره ای",
        },
      },
      {
        path: "Car-Details",
        name: "CAR DETAILS",
        view: "Car-Details",
        meta: {
          auth: false,
          title: "جزئیات خودرو اجاره ای",
        },
      },
      {
        path: "Edit-Rent-Car",
        name: "EDIT RENT CAR",
        view: "Add-Rent-Car",
        meta: {
          auth: false,
          title: "ویرایش خودرو اجاره ای",
        },
      },
      {
        path: "Users",
        name: "USERS",
        view: "Users",
        meta: {
          auth: true,
          title: "لیست کاربران",
        },
      },
      {
        path: "User-Info",
        name: "USER INFO",
        view: "User-Info",
        meta: {
          auth: true,
          title: "اطلاعات کاربر",
        },
      },
      {
        path: "Add-User",
        name: "ADD NEW USER",
        view: "Add-Edit-User",
        meta: {
          auth: true,
          title: "افزودن کاربر",
        },
      },
      {
        path: "Edit-User",
        name: "EDIT USER",
        view: "Add-Edit-User",
        meta: {
          auth: true,
          title: "ویرایش کاربر",
        },
      },
      {
        path: "Cars",
        name: "CARS",
        view: "Cars",
        meta: {
          auth: true,
          title: "لیست خودرو ها",
        },
      },
      {
        path: "Requests",
        name: "REQUESTS",
        view: "Requests",
        meta: {
          auth: true,
          title: "لیست درخواست ها",
        },
      },
      {
        path: "Request-Details",
        name: "REQUEST DETAILS",
        view: "Request-Details",
        meta: {
          auth: false,
          title: "جزئیات درخواست",
        },
      },
      {
        path: "Transactions",
        name: "TRANSACTIONS",
        view: "Transactions",
        meta: {
          auth: true,
          title: "تراکنش ها",
          public: true,
        },
      },
      {
        path: "Add-Transaction",
        name: "ADD NEW TRANSACTION",
        view: "Add-Edit-Transaction",
        meta: {
          auth: true,
          title: "افزودن تراکنش",
          public: true,
        },
      },
      {
        path: "Edit-Transaction",
        name: "EDIT TRANSACTION",
        view: "Add-Edit-Transaction",
        meta: {
          auth: true,
          title: "ویرایش تراکنش",
          public: true,
        },
      },
      {
        path: "Sms-Management",
        name: "SMS MANAGEMENT",
        view: "Sms-Management",
        meta: {
          auth: true,
          title: "پیامک ها",
          public: true,
        },
      },
    ],
  },
  {
    path: "",
    name: "MAIN HOME",
    view: "Login",
    meta: {
      auth: true,
      title: "صفحه اصلی",
      public: true,
    },
    redirect:"/Login"
  },
  {
    path: "/Profile",
    name: "PROFILE",
    view: "Profile",
    meta: {
      auth: true,
      title: "پروفایل من",
    },
  },
  {
    path: "/Login",
    name: "LOGIN",
    view: "Login",
    meta: {
      auth: true,
      title: "ورود",
    },
  },
  {
    path: "/All-Cars",
    name: "ALL CARS",
    view: "All-Cars",
    meta: {
      public: true,
      auth: true,
      title: "لیست تمام خودرو ها",
    },
  },
  {
    path: "/About-Us",
    name: "ABOUT US",
    view: "About-Us",
    meta: {
      public: true,
      auth: true,
      title: "درباره ما",
    },
  },
];
