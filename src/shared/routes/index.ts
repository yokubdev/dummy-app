import { baseRoutes } from "./baseRoutes";
import { mainRoutes } from "./mainRoutes";
import { userRoutes } from "./userRoutes";

const routes = [...baseRoutes, ...mainRoutes, ...userRoutes];

export default routes;
