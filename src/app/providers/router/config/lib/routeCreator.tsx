import { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '../ui/ProtectedRoute';

import { AppRoutePropsType } from '@/shared/config/routeConfig/routeConfig';

type RouteCreatorType = Record<string, AppRoutePropsType>;

export const routeCreator = (routeConfig: RouteCreatorType): Array<RouteObject> => {
  return Object.values(routeConfig).map(({ path, element, isAuthOnly }) => ({
    path,
    element: isAuthOnly ? <ProtectedRoute>{element}</ProtectedRoute> : element,
  }));
};
