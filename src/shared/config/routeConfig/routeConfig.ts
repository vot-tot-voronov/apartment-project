import { RouteProps } from 'react-router-dom';

export enum MainRoutesEnum {
  MAIN = 'main',
  BUY = 'buy',
  SELL = 'sell',
  RENT_LIST = 'rent',
  RENT_DETAILED = ':id',
  PROFILE = 'profile',
  NOT_FOUND_PAGE = 'not-found-page',
}

export const MainRoutePaths: Record<MainRoutesEnum, string> = {
  [MainRoutesEnum.MAIN]: '/',
  [MainRoutesEnum.BUY]: '/buy',
  [MainRoutesEnum.SELL]: '/sell',
  [MainRoutesEnum.RENT_LIST]: '/rent',
  [MainRoutesEnum.RENT_DETAILED]: `${MainRoutesEnum.RENT_LIST}/${MainRoutesEnum.RENT_DETAILED}`,
  [MainRoutesEnum.PROFILE]: '/profile/:id',
  [MainRoutesEnum.NOT_FOUND_PAGE]: '*',
};

export type AppRoutePropsType = {
  isAuthOnly?: boolean;
} & RouteProps;

export const getRouteMain = () => MainRoutePaths[MainRoutesEnum.MAIN];
export const getRouteProfile = (id: string) => `/${MainRoutesEnum.PROFILE}/${id}`;
export const getRouteRentDetailed = (id: string) => `/${MainRoutesEnum.RENT_LIST}/${id}`;
