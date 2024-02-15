import { RouteObject, RouteProps } from 'react-router-dom';

type RouteCreator = Record<string, RouteProps>;

export const routeCreator = (routeConfig: RouteCreator): Array<RouteObject> => {
  return Object.values(routeConfig).map(({ path, element }) => ({ path, element }));
};
