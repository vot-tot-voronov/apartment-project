import { MainRoutesEnum, MainRoutePaths, AppRoutePropsType } from '@/shared/config/routeConfig/routeConfig';
import { MainPage } from '@/pages/main';
import { BuyPage } from '@/pages/buy';
import { SellPage } from '@/pages/sell';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { RentListPage } from '@/pages/rentList';
import { RentDetailedPage } from '@/pages/rentDetailed';

export const mainRouteConfig: Record<MainRoutesEnum, AppRoutePropsType> = {
  [MainRoutesEnum.MAIN]: {
    path: MainRoutePaths[MainRoutesEnum.MAIN],
    element: <MainPage />,
  },
  [MainRoutesEnum.BUY]: { path: MainRoutePaths[MainRoutesEnum.BUY], element: <BuyPage /> },
  [MainRoutesEnum.SELL]: {
    path: MainRoutePaths[MainRoutesEnum.SELL],
    element: <SellPage />,
  },
  [MainRoutesEnum.RENT_LIST]: {
    path: MainRoutePaths[MainRoutesEnum.RENT_LIST],
    element: <RentListPage />,
  },
  [MainRoutesEnum.RENT_DETAILED]: {
    path: MainRoutePaths[MainRoutesEnum.RENT_DETAILED],
    element: <RentDetailedPage />,
  },
  [MainRoutesEnum.PROFILE]: {
    path: MainRoutePaths[MainRoutesEnum.PROFILE],
    element: <ProfilePage />,
    isAuthOnly: true,
  },
  [MainRoutesEnum.NOT_FOUND_PAGE]: {
    path: MainRoutePaths[MainRoutesEnum.NOT_FOUND_PAGE],
    element: <NotFoundPage />,
  },
};
