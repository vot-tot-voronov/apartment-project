import {
  MainRoutesEnum,
  MainRoutePaths,
  AppRoutePropsType,
  getRouteNewRentApartment,
  getRouteMain,
  getRouteBuyList,
  getRouteSellList,
  getRouteRentList,
  getRouteRentDetailed,
  getRouteProfile,
} from '@/shared/config/routeConfig/routeConfig';
import { MainPage } from '@/pages/main';
import { BuyPage } from '@/pages/buy';
import { SellPage } from '@/pages/sell';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { RentListPage } from '@/pages/rentList';
import { RentDetailedPage } from '@/pages/rentDetailed';
import { NewApartment } from '@/pages/newApartment';
import { newRentApartmentLoader } from '@/shared/lib';
import { AboutForm, ConditionsForm, FacilitiesForm } from '@/features/createNewApartment';

export const mainRouteConfig: Record<MainRoutesEnum, AppRoutePropsType> = {
  [MainRoutesEnum.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [MainRoutesEnum.BUY_LIST]: { path: getRouteBuyList(), element: <BuyPage /> },
  [MainRoutesEnum.SELL_LIST]: {
    path: getRouteSellList(),
    element: <SellPage />,
  },
  [MainRoutesEnum.RENT_LIST]: {
    path: getRouteRentList(),
    element: <RentListPage />,
  },
  [MainRoutesEnum.RENT_DETAILED]: {
    path: getRouteRentDetailed(':id'),
    element: <RentDetailedPage />,
  },
  [MainRoutesEnum.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    isAuthOnly: true,
  },
  [MainRoutesEnum.NEW_RENT_APARTMENT]: {
    path: MainRoutePaths[MainRoutesEnum.NEW_RENT_APARTMENT],
    element: <NewApartment />,
    isAuthOnly: true,
    loader: newRentApartmentLoader,
    nested: [
      {
        path: getRouteNewRentApartment('ABOUT'),
        element: <AboutForm />,
        isAuthOnly: true,
      },
      {
        path: getRouteNewRentApartment('CONDITIONS'),
        element: <ConditionsForm />,
        isAuthOnly: true,
      },
      {
        path: getRouteNewRentApartment('FACILITIES'),
        element: <FacilitiesForm />,
        isAuthOnly: true,
      },
    ],
  },
  [MainRoutesEnum.NOT_FOUND_PAGE]: {
    path: MainRoutePaths[MainRoutesEnum.NOT_FOUND_PAGE],
    element: <NotFoundPage />,
  },
};
