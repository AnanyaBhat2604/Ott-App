import { constants } from "@/assets/constants/constants";
import { getCookie, setCookie } from "@/services/cookieService/cookies";

export const setRoutePermissions = (route: string): void => {
  const existingRoutes: string[] = getCookie(constants.ROUTE_PERMISSIONS) || [];

  const routeExists = existingRoutes.includes(route);

  if (!routeExists) {
    existingRoutes.push(route);
    setCookie(constants.ROUTE_PERMISSIONS, existingRoutes);
  }
};

export const getRoutePermissions = (route: string): boolean => {
  const existingRoutes: string[] = getCookie(constants.ROUTE_PERMISSIONS) || [];

  return !!existingRoutes.includes(route);
};

export const deleteRoutePermissions = (route: string): void => {
  let existingRoutes: string[] = getCookie(constants.ROUTE_PERMISSIONS) || [];

  existingRoutes = existingRoutes.filter(
    (existingRoute) => existingRoute !== route
  );

  setCookie(constants.ROUTE_PERMISSIONS, existingRoutes);
};

export const deleteAllRoutePermissions = (): void => {
  setCookie(constants.ROUTE_PERMISSIONS, []);
};
