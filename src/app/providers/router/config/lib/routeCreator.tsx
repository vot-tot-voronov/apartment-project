import { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '../ui/ProtectedRoute';

import { IAppRouteProps } from '@/shared/config/routeConfig/routeConfig';

type RouteCreator = Record<string, IAppRouteProps>;

export const routeCreator = (routeConfig: RouteCreator): Array<RouteObject> => {
  return Object.values(routeConfig).map(({ path, element, isAuthOnly }) => ({
    path,
    element: isAuthOnly ? <ProtectedRoute>{element}</ProtectedRoute> : element,
  }));
};
