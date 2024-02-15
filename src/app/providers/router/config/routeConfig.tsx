import { RouteProps } from 'react-router-dom';

import { MainRoutesEnum, MainRoutePaths } from '@/shared/config/routeConfig/routeConfig';
import { MainPage } from '@/pages/main';
import { ApartmentsPage } from '@/pages/apartments';

export const mainRouteConfig: Record<MainRoutesEnum, RouteProps> = {
  [MainRoutesEnum.MAIN]: { path: MainRoutePaths[MainRoutesEnum.MAIN], element: <MainPage /> },
  [MainRoutesEnum.APARTMENTS]: {
    path: MainRoutePaths[MainRoutesEnum.APARTMENTS],
    element: <ApartmentsPage />,
  },
};
