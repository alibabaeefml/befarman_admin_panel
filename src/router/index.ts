import routes from "./routeHandler";

import paths from "./paths";

const route = new routes();

export default route.setDefaultTitle("basic").init(
  paths,
  (view: string) => {
    return (resolve: any) => import(`../views/${view}.vue`).then(resolve);
  },
  "/dashboard"
);
