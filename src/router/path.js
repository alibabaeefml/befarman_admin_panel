export default [{
        path: "/",
        name: "main",
        view: "main",
        redirect: "dashboard",
        meta: {
            auth: true,
            title: "صفحه اصلی",
            public: true
        }
    },
    {
        path: "/login",
        name: "LOGIN",
        view: "Login",
        meta: {
            auth: true,
            title: "ورود"
        }
    },
    {
        path: "/dashboard",
        name: "dashboard",
        view: "Dashboard",
        meta: {
            auth: true,
            title: "داشبورد"
        }
    },
    {
        path: "/client-cars",
        name: "clientCars",
        view: "ClientCars",
        meta: {
            auth: true,
            title: "لیست خودرو های اجاره ای"
        }
    },
    {
        path: "/client-cars/add",
        name: "addClientCar",
        view: "ClientCarAddEdit",
        meta: {
            auth: false,
            title: "افزودن خودرو اجاره ای"
        }
    },
    {
        path: "/client-cars/:id/edit",
        name: "editClientCars",
        view: "ClientCarAddEdit",
        meta: {
            auth: false,
            title: "ویرایش خودرو اجاره ای"
        }
    },
    {
        path: "/client-cars/:id",
        name: "clientCarDetails",
        view: "ClientCarDetail",
        meta: {
            auth: false,
            title: "جزئیات خودرو اجاره ای"
        }
    },
    {
        path: "/users",
        name: "users",
        view: "Users",
        meta: {
            auth: true,
            title: "لیست کاربران"
        }
    },
    {
        path: "/users/:id",
        name: "userDetails",
        view: "UserInfo",
        meta: {
            auth: true,
            title: "اطلاعات کاربر"
        }
    },
    {
        path: "/users/add",
        name: "addUser",
        view: "UserAddEdit",
        meta: {
            auth: true,
            title: "افزودن کاربر"
        }
    },
    {
        path: "/users/:id/edit",
        name: "editUser",
        view: "UserAddEdit",
        meta: {
            auth: true,
            title: "ویرایش کاربر"
        }
    },
    {
        path: "/cars",
        name: "cars",
        view: "Cars",
        meta: {
            auth: true,
            title: "لیست خودرو ها"
        }
    },
    {
        path: "/requests",
        name: "requests",
        view: "Requests",
        meta: {
            auth: true,
            title: "لیست درخواست ها"
        }
    },
    {
        path: "/requests/:id",
        name: "requestDetails",
        view: "RequestDetails",
        meta: {
            auth: false,
            title: "جزئیات درخواست"
        }
    },
    {
        path: "/transactions",
        name: "transactions",
        view: "Transaction",
        meta: {
            auth: true,
            title: "تراکنش ها"
        }
    },
    {
        path: "/transactions/add",
        name: "addTransaction",
        view: "TransactionAddEdit",
        meta: {
            auth: true,
            title: "افزودن تراکنش"
        }
    },
    {
        path: "/transactions/:id/edit",
        name: "editTransaction",
        view: "TransactionAddEdit",
        meta: {
            auth: true,
            title: "ویرایش تراکنش"
        }
    },
    {
        path: "/sms-management",
        name: "smsManagement",
        view: "SmsManagement",
        meta: {
            auth: true,
            title: "مدیریت پیامک ها"
        }
    }
];