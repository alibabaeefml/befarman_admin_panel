export default [
  {
    path: "/Admin",
    name: "admin",
    view: "Admin",
    redirect: "admin/home",
    children: [
      {
        path: "Home",
        name: "Home",
        view: "Home",
        meta: {
          auth: true,
          title: "داشبورد",
        },
      },
      {
        path: "Transaction",
        name: "Transaction",
        view: "Transaction",
        meta: {
          auth: true,
          title: "تراکنش ها",
        },
      },
      {
        path: "Sms-Management",
        name: "Sms-Management",
        view: "Sms-Management",
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
        path: "Add-Rent-Car",
        name: "Add-Rent-Car",
        view: "Add-Rent-Car",
        meta: {
          auth: false,
          title: "افزودن خودرو اجاره ای",
        },
      },
      {
        path: "Car-Details",
        name: "Car-Details",
        view: "Car-Details",
        meta: {
          auth: false,
          title: "جزئیات خودرو اجاره ای",
        },
      },
      {
        path: "Edit-Rent-Car",
        name: "Edit-Rent-Car",
        view: "Add-Rent-Car",
        meta: {
          auth: false,
          title: "ویرایش خودرو اجاره ای",
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
    name: "Main-Home",
    view: "Main-Home",
    meta: {
      auth: true,
      title: "صفحه اصلی",
      public: true,
    },
  },
  {
    path: "/Profile",
    name: "Profile",
    view: "Profile",
    meta: {
      auth: true,
      title: "پروفایل من",
    },
  },
  {
    path: "/Login",
    name: "Login",
    view: "Login",
    meta: {
      auth: true,
      title: "ورود",
    },
  },
  {
    path: "/All-Cars",
    name: "All-Cars",
    view: "All-Cars",
    meta: {
      public: true,
      auth: true,
      title: "لیست تمام خودرو ها",
    },
  },
  {
    path: "/About-Us",
    name: "About-Us",
    view: "About-Us",
    meta: {
      public: true,
      auth: true,
      title: "درباره ما",
    },
  },
];
