import { RouteProps } from 'react-router-dom';

export enum MainRoutesEnum {
  MAIN = 'main',
  BUY_LIST = 'buy',
  SELL_LIST = 'sell',
  RENT_LIST = 'rent',
  RENT_DETAILED = 'rent-detailed',
  PROFILE = 'profile',
  NEW_RENT_APARTMENT = 'new-rent-apartment',
  NOT_FOUND_PAGE = 'not-found-page',
}

export const MainRoutePaths: Record<MainRoutesEnum, string> = {
  [MainRoutesEnum.MAIN]: '/',
  [MainRoutesEnum.BUY_LIST]: '/buy',
  [MainRoutesEnum.SELL_LIST]: '/sell',
  [MainRoutesEnum.RENT_LIST]: '/rent',
  [MainRoutesEnum.RENT_DETAILED]: `${MainRoutesEnum.RENT_LIST}/:id`,
  [MainRoutesEnum.PROFILE]: '/profile/:id',
  [MainRoutesEnum.NEW_RENT_APARTMENT]: `/${MainRoutesEnum.NEW_RENT_APARTMENT}`,
  [MainRoutesEnum.NOT_FOUND_PAGE]: '*',
};

export enum NewRentApartmentEnum {
  ABOUT = 'about',
  CONDITIONS = 'conditions',
  FACILITIES = 'facilities',
}

export const NewRentApartmentPaths: Record<NewRentApartmentEnum, string> = {
  [NewRentApartmentEnum.ABOUT]: `/${MainRoutesEnum.NEW_RENT_APARTMENT}/${NewRentApartmentEnum.ABOUT}`,
  [NewRentApartmentEnum.CONDITIONS]: `/${MainRoutesEnum.NEW_RENT_APARTMENT}/${NewRentApartmentEnum.CONDITIONS}`,
  [NewRentApartmentEnum.FACILITIES]: `/${MainRoutesEnum.NEW_RENT_APARTMENT}/${NewRentApartmentEnum.FACILITIES}`,
};

type ExtendedRoutePropsType = RouteProps & {
  isAuthOnly?: boolean;
};

export type AppRoutePropsType = ExtendedRoutePropsType & {
  nested?: Array<ExtendedRoutePropsType>;
};

export const getRouteMain = () => MainRoutePaths[MainRoutesEnum.MAIN];
export const getRouteProfile = (id: string) => `/${MainRoutesEnum.PROFILE}/${id}`;
export const getRouteBuyList = () => MainRoutePaths[MainRoutesEnum.BUY_LIST];
export const getRouteSellList = () => MainRoutePaths[MainRoutesEnum.SELL_LIST];
export const getRouteRentDetailed = (id: string) => `/${MainRoutesEnum.RENT_LIST}/${id}`;
export const getRouteRentList = () => MainRoutePaths[MainRoutesEnum.RENT_LIST];
export const getRouteNewRentApartment = (type: keyof typeof NewRentApartmentEnum) =>
  `/${MainRoutesEnum.NEW_RENT_APARTMENT}/${NewRentApartmentEnum[type]}`;
