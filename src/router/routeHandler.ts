import localStorage from "@/utils/store-management/localStorage";
import {
  createRouter,
  createWebHistory,
  type RouteMeta,
  type Router,
  type RouteRecordRaw,
} from "vue-router";

export declare interface Path {
  path: string;
  view: string;
  name?: string;
  props?: boolean;
  meta?: RouteMeta;
}

export default class RouteHandler {
  module?: string;
  defaultTitle: string = "willaEngine";

  init(
    paths: Path[],
    callbackDynamicImport: Function,
    redirect: string,
    module?: string
  ): Router {
    this.module = module;
    const router: Router = this.create(paths, callbackDynamicImport, redirect);
    this.beforeLoad(router);
    // this.afterLoad(router);
    return router;
  }

  route(options: Path, callbackDynamicImport: Function): RouteRecordRaw {
    const path: string = options.path;
    const view: string = options.view;
    const name: string = options.name ?? options.view;
    const props: boolean = !!options.props;
    const meta: RouteMeta = options.meta ? options.meta : {};
    return {
      name,
      path,
      props,
      meta,
      component: callbackDynamicImport(view),
    };
  }

  create(
    paths: Path[],
    callbackDynamicImport: Function,
    redirect: string = paths[0].path
  ): Router {
    const self = this;
    return createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: paths
        .map((path: Path) => self.route(path, callbackDynamicImport))
        .concat([{ path: "/:catchAll(.*)", redirect }]),
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
          return { selector: to.hash };
        }
        return { top: 0 };
      },
    });
  }

  beforeLoad(router: Router): void {
    router.beforeEach((to: any, from: any, next: () => void) => {
      if (!localStorage.get("user") && to.path !== "/login") {
        window.location.href = "/login";
      } else if (localStorage.get("user") && to.path === "/login") {
        window.location.href = from.path;
      }
      this.setTitle(to);
      next();
    });
  }

  setDefaultTitle(title: string): RouteHandler {
    this.defaultTitle = title;
    return this;
  }

  setTitle(to: any) {
    document.title = to.meta.title || this.defaultTitle;
  }

  // afterLoad(router: Router): void {
  //   router.afterEach((to: any, from: any) => {});
  // }
}
