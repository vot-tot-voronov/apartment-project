export enum MainRoutesEnum {
  MAIN = 'main',
  BUY = 'buy',
  SELL = 'sell',
  RENT = 'rent',
  PROFILE = 'profile',
  NOT_FOUND_PAGE = 'not-found-page',
}

export const MainRoutePaths: Record<MainRoutesEnum, string> = {
  [MainRoutesEnum.MAIN]: '/',
  [MainRoutesEnum.BUY]: '/buy',
  [MainRoutesEnum.SELL]: '/sell',
  [MainRoutesEnum.RENT]: '/rent',
  [MainRoutesEnum.PROFILE]: '/profile',
  [MainRoutesEnum.NOT_FOUND_PAGE]: '*',
};
