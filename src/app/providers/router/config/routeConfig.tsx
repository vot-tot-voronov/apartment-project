import { RouteProps } from 'react-router-dom';

import { MainRoutesEnum, MainRoutePaths } from '@/shared/config/routeConfig/routeConfig';
import { MainPage } from '@/pages/main';
import { BuyPage } from '@/pages/buy';
import { SellPage } from '@/pages/sell';
import { RentPage } from '@/pages/rent';
import { NotFoundPage } from '@/pages/notFound';

export const mainRouteConfig: Record<MainRoutesEnum, RouteProps> = {
  [MainRoutesEnum.MAIN]: {
    path: MainRoutePaths[MainRoutesEnum.MAIN],
    element: <MainPage />,
  },
  [MainRoutesEnum.BUY]: { path: MainRoutePaths[MainRoutesEnum.BUY], element: <BuyPage /> },
  [MainRoutesEnum.SELL]: {
    path: MainRoutePaths[MainRoutesEnum.SELL],
    element: <SellPage />,
  },
  [MainRoutesEnum.RENT]: {
    path: MainRoutePaths[MainRoutesEnum.RENT],
    element: <RentPage />,
  },
  [MainRoutesEnum.NOT_FOUND_PAGE]: {
    path: MainRoutePaths[MainRoutesEnum.NOT_FOUND_PAGE],
    element: <NotFoundPage />,
  },
};
