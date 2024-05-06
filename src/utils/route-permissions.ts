import { constants } from "@/assets/constants/constants";
import { getData, setData } from "@/services/storage/storage";

export const setRoutePermissions = (route: string): void => {
  const existingRoutes: string[] = getData(constants.ROUTE_PERMISSIONS) || [];

  const routeExists = existingRoutes.includes(route);

  if (!routeExists) {
    existingRoutes.push(route);
    setData(constants.ROUTE_PERMISSIONS, existingRoutes);
  }
};

export const getRoutePermissions = (route: string): boolean => {
  const existingRoutes: string[] = getData(constants.ROUTE_PERMISSIONS) || [];

  return !!existingRoutes.includes(route);
};

export const deleteRoutePermissions = (route: string): void => {
  let existingRoutes: string[] = getData(constants.ROUTE_PERMISSIONS) || [];

  existingRoutes = existingRoutes.filter(
    (existingRoute) => existingRoute !== route
  );

  setData(constants.ROUTE_PERMISSIONS, existingRoutes);
};
