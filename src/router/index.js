import { createRouter,createWebHistory } from "vue-router";
import paths from "./path";
import { TokenService } from "@/services/storage.services.js";

function route(options) {
  let path = options.path;
  let view = options.view;
  let name = options.name;
  let meta = options.meta ? options.meta : "";
  let children = options.children ? options.children : null;
  let redirect = options.redirect ? options.redirect : null;
  let currentRoute = {
    name: name || view,
    path,
    meta,
    component: (resovle) => import(`../views/${view}.vue`).then(resovle),
  };
  if (children && Array.isArray(children)) {
    children = children.map((path) => {
      path.view = view + "/" + path.view;
      return path;
    });
    currentRoute["children"] = children.map((path) => route(path));
  }
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
    .concat([{ path: "/:pathMatch(.*)", redirect: "admin/home" }]),

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

export default router;