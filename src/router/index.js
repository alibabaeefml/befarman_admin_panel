import { createRouter, createWebHistory } from "vue-router";
import paths from "./path";

function route(options) {
    let path = options.path;
    let view = options.view;
    let name = options.name;
    let meta = options.meta ? options.meta : "";
    let redirect = options.redirect ? options.redirect : null;
    let currentRoute = {
        name: name || view,
        path,
        meta,
        component: (resovle) =>
            import (`../views/${view}.vue`).then(resovle),
    };
    if (redirect) {
        currentRoute["redirect"] = redirect;
    }
    return currentRoute;
}

// Create a new router
const router = createRouter({
    history: createWebHistory(),
    routes: paths
        .map((path) => route(path))
        .concat([{ path: "/:pathMatch(.*)", redirect: "/home" }]),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { left: 0, top: 0 };
    },
});

const DEFAULT_TITLE = 'بفرمان اجاره خودرو مردم به مردم';
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});


export default router;