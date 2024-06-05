import { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '../ui/ProtectedRoute';

import { AppRoutePropsType } from '@/shared/config/routeConfig/routeConfig';

type RouteCreatorType = Record<string, AppRoutePropsType>;

const mapRoutes = (routes: Array<AppRoutePropsType>): Array<RouteObject> => {
  return routes.map(({ path, element, isAuthOnly, nested, loader }) => ({
    loader,
    path,
    element: isAuthOnly ? <ProtectedRoute>{element}</ProtectedRoute> : element,
    children: nested?.length ? mapRoutes(nested) : undefined,
  }));
};

export const routeCreator = (routeConfig: RouteCreatorType): Array<RouteObject> => {
  return mapRoutes(Object.values(routeConfig));
};
